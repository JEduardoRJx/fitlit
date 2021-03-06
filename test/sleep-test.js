const chai = require('chai');
const assert = require('chai').assert;
const Sleep = require('../src/sleepClass.js');

describe('Sleep', () => {
  let sleeps, sleepData;
  beforeEach(() => {
  sleeps = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 4,
      "date": "2019/06/15",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 5,
      "date": "2019/06/15",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 4.1,
      "sleepQuality": 3.8
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "hoursSlept": 10.7,
      "sleepQuality": 3.4
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "hoursSlept": 8.3,
      "sleepQuality": 4.5
    },
    {
      "userID": 5,
      "date": "2019/06/16",
      "hoursSlept": 7.4,
      "sleepQuality": 2.4
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "hoursSlept": 5.3,
      "sleepQuality": 4.9
    },
    {
      "userID": 4,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 1.1
    },
    {
      "userID": 5,
      "date": "2019/06/17",
      "hoursSlept": 10.5,
      "sleepQuality": 3.7
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 10.4,
      "sleepQuality": 3.1
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    },
    {
      "userID": 3,
      "date": "2019/06/18",
      "hoursSlept": 9.8,
      "sleepQuality": 2.6
    },
    {
      "userID": 4,
      "date": "2019/06/18",
      "hoursSlept": 5.9,
      "sleepQuality": 2.5
    },
    {
      "userID": 5,
      "date": "2019/06/18",
      "hoursSlept": 5.2,
      "sleepQuality": 4.1
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 10.7,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    },
    {
      "userID": 3,
      "date": "2019/06/19",
      "hoursSlept": 7.2,
      "sleepQuality": 3.4
    },
    {
      "userID": 4,
      "date": "2019/06/19",
      "hoursSlept": 5.2,
      "sleepQuality": 2.3
    },
    {
      "userID": 5,
      "date": "2019/06/19",
      "hoursSlept": 4.8,
      "sleepQuality": 3.4
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    },
    {
      "userID": 3,
      "date": "2019/06/20",
      "hoursSlept": 9.4,
      "sleepQuality": 1.2
    },
    {
      "userID": 4,
      "date": "2019/06/20",
      "hoursSlept": 8.3,
      "sleepQuality": 1.9
    },
    {
      "userID": 5,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 3.5
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.8,
      "sleepQuality": 4.2
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    },
    {
      "userID": 3,
      "date": "2019/06/21",
      "hoursSlept": 8.9,
      "sleepQuality": 3.7
    },
    {
      "userID": 4,
      "date": "2019/06/21",
      "hoursSlept": 10.6,
      "sleepQuality": 2.7
    },
    {
      "userID": 5,
      "date": "2019/06/21",
      "hoursSlept": 9.6,
      "sleepQuality": 4.1
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 7,
      "sleepQuality": 3
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.8,
      "sleepQuality": 3.3
    },
    {
      "userID": 3,
      "date": "2019/06/22",
      "hoursSlept": 9.8,
      "sleepQuality": 2.1
    },
    {
      "userID": 4,
      "date": "2019/06/22",
      "hoursSlept": 7.7,
      "sleepQuality": 1.5
    },
    {
      "userID": 5,
      "date": "2019/06/22",
      "hoursSlept": 8.1,
      "sleepQuality": 1.3
    }
  ];
  sleepData = new Sleep(sleeps, 5);
  });

  it('should be a function', () => {
    assert.isFunction(Sleep);
  });

  it('should identify user', () => {
    assert.equal(sleepData.userID, 5);
  });

  it('should return a single user data', () => {
    sleepData.extractSingleUser();
    assert.equal(sleepData.singleUserData.length, 8);
  });

  it('should return the average number of hours slept', () => {
    sleepData.extractSingleUser();
    assert.equal(sleepData.averageHoursSlept(), 7.5);
  });

  it('should return the average sleep quality', () => {
    sleepData.extractSingleUser();
    assert.equal(sleepData.averageSleepQuality() ,3.3);
  });

  it('should return amount of hours slept for latest day', () => {
    sleepData.extractSingleUser();
    let latestWeek = sleepData.findLatestWeek();
    assert.equal(latestWeek[latestWeek.length - 1].hoursSlept, 8.1);
  });

  it('should return sleep quality for latest date', () => {
    sleepData.extractSingleUser();
    let latestWeek = sleepData.findLatestWeek();
    assert.equal(latestWeek[latestWeek.length - 1].sleepQuality, 1.3);
  });

  it('should return the last week worth of sleep information', () => {
    sleepData.extractSingleUser();
    assert.deepEqual(sleepData.findLatestWeek(), [{"date": "2019/06/16", "hoursSlept": 7.4, "sleepQuality": 2.4, "userID": 5}, {"date": "2019/06/17", "hoursSlept": 10.5, "sleepQuality": 3.7, "userID": 5}, {"date": "2019/06/18", "hoursSlept": 5.2, "sleepQuality": 4.1, "userID": 5}, {"date": "2019/06/19", "hoursSlept": 4.8, "sleepQuality": 3.4, "userID": 5}, {"date": "2019/06/20", "hoursSlept": 10.1, "sleepQuality": 3.5, "userID": 5,}, {"date": "2019/06/21", "hoursSlept": 9.6, "sleepQuality": 4.1, "userID": 5}, {"date": "2019/06/22", "hoursSlept": 8.1, "sleepQuality": 1.3, "userID": 5}]);
  });

  it('should return total hours slept for any given week', () => {
    sleepData.extractSingleUser();
    assert.deepEqual(sleepData.calculateWeeklyHoursSlept("2019/06/16"), [7.4, 10.5, 5.2, 4.8, 10.1, 9.6, 8.1]);
  });

  it('should return total sleep quality for any given week', () => {
    sleepData.extractSingleUser();
    assert.deepEqual(sleepData.calculateWeeklySleepQuality("2019/06/16"), [2.4, 3.7, 4.1, 3.4, 3.5, 4.1, 1.3]);
  });

  it('should return average sleep quality of everyone', () => {
    assert.equal(sleepData.calculateAverageSleepQualityForEveryone(), 120.6);
  });

  it.skip('should return users who average a sleep quality greater than 3 for a given week', () => {
    assert.deepEqual(sleepData.findUsersSleepQualityGreaterThanThree("2019/06/16"), 1);
  });

  it('should return the user(s) who slept the most number of hours for a given day', () => {
    assert.deepEqual(sleepData.returnUsersWhoSleptTheMost("2019/06/16"), [{
      userID: 3, 
      date: '2019/06/16', 
      hoursSlept: 10.7, 
      sleepQuality: 3.4}]);
  });

  it('should return date user had the most hours slept', () => {
    sleepData.extractSingleUser();
    assert.deepEqual(sleepData.returnDateWithMostHoursSlept('2019/06/16'), {
      userID: 5,
      date: '2019/06/17',
      hoursSlept: 10.5,
      sleepQuality: 3.7
    });
  });
});