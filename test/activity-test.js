const chai = require('chai');
const assert = require('chai').assert;
const Activity = require('../src/activityClass.js');
const UserRepository = require('../src/userRepository.js');

describe('Activity', () => {
  let activity, activitySamples;
  beforeEach(() => {
    activitySamples = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 6637,
        "minutesActive": 175,
        "flightsOfStairs": 36
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numSteps": 4112,
        "minutesActive": 220,
        "flightsOfStairs": 37
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "numSteps": 12304,
        "minutesActive": 152,
        "flightsOfStairs": 8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numSteps": 13750,
        "minutesActive": 65,
        "flightsOfStairs": 4
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numSteps": 4547,
        "minutesActive": 97,
        "flightsOfStairs": 5
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "numSteps": 2546,
        "minutesActive": 274,
        "flightsOfStairs": 26
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numSteps": 9858,
        "minutesActive": 243,
        "flightsOfStairs": 44
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "numSteps": 10961,
        "minutesActive": 188,
        "flightsOfStairs": 17
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numSteps": 8153,
        "minutesActive": 74,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "numSteps": 5369,
        "minutesActive": 129,
        "flightsOfStairs": 46
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numSteps": 10225,
        "minutesActive": 174,
        "flightsOfStairs": 26
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "numSteps": 7498,
        "minutesActive": 199,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 10289,
        "minutesActive": 119,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numSteps": 3605,
        "minutesActive": 124,
        "flightsOfStairs": 31
      },
      {
        "userID": 3,
        "date": "2019/06/22",
        "numSteps": 11342,
        "minutesActive": 53,
        "flightsOfStairs": 17
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 13928,
        "minutesActive": 218,
        "flightsOfStairs": 21
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numSteps": 4148,
        "minutesActive": 142,
        "flightsOfStairs": 0
      },
      {
        "userID": 3,
        "date": "2019/06/23",
        "numSteps": 4665,
        "minutesActive": 219,
        "flightsOfStairs": 9
      },
    ];
    
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];
    
    userRepo = new UserRepository(userData)  
    activity = new Activity(activitySamples, userData, 3) 
  });
  
  
  it('should be a function', () => {
    assert.isFunction(Activity);
  });

  it('should be an instance of the Activity class', () => {
    assert.equal(activity instanceof Activity, true);
  });

  it('should return stride length', () => {
    activity.extractSingleUser();
    assert.equal(activity.getStrideLength("2019/06/15"), 4.4);
  });

  it('should return a single date', () => {
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    activity.extractSingleDay("2019/06/15");
    assert.deepEqual(activity.oneDay, activity.activityData[2]);
  });

  it('should return number of miles walked that day', () => { 
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    assert.deepEqual(activity.calculateDailyMiles("2019/06/15"), 6.2);
  });

  it('should return minutes active for a given date', () => {
    assert.equal(activity.calculateMinutesActive("2019/06/23"), 219);
  });

  it('should return minutes active for one user', () => {
    assert.deepEqual(activity.getMinsActive(), [
      116, 152,
       97, 274,
      188, 129,
      199,  53,
      219
    ]);
  });

  it('should return average minutes active over a week', () => {
    activity.extractSingleActivityData();
    assert.equal(activity.calculateWeeklyActiveMins(), 166);
  });

  it('should return a user\'s daily step goal', () => {
    activity.extractSingleUser();
    assert.equal(activity.determineStepGoal(), 5000);
  });

  it('should return whether a user met their step goal', () => {
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    assert.equal(activity.compareStepsToGoal( "2019/06/15"), true);
  });

  it('should report if user has exceeded their step goal', () => {
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    assert.deepEqual(activity.checkIfExceededGoal(), [
      '2019/06/15', '2019/06/16', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22']);
  });

  it('should return all time stair climbing record', () => {
    activity.extractSingleActivityData();
    assert.equal(activity.checkFlightsClimbed(), 46);
  });

  it('should return the average flights of stairs climbed between all users for a given date', () => {
    assert.equal(activity.getStairsClimbedAvg("2019/06/23"), 10);
  });

  it('should return the average number of steps walked between all users for a given date', () => {
    assert.equal(activity.getAvgSteps("2019/06/23"), 7580);
  });

  it('should return the average number of minutes active between all users for agiven date', () => {
    assert.equal(activity.getAvgMinsActive("2019/06/23"), 193);
  });
});