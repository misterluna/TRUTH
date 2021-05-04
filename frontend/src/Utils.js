import axios from "axios";

class Utils {

  // USER AUTHENTICATION

  /**
   * Retrieve username's unique user id, if the user exists and the password is
   * correct.
   * @param  {String} username
   * @param  {String} password
   * @return {String} The user's unique id.
   */
  static login(username, password) {
    // TODO
    return;
  }

  // USER INFORMATION
  
  /**
   * Retrieve all of userId's information.
   * @param  {String} userId    The user's unique id.
   * @return {Promise}           The requested value for that category (e.g. 19)
   */
   static getUser(userId) {
    const getData = async () => {
      const res = await axios.get("api/users/" + userId + "/");
      return res.data;
    }
    const promise = getData();
    return promise;
  }

  /**
   * Returns user.info[category] if object user is defined, null if it is not.
   * Example: getUserInfo(activeUser, "name") === "Oski"
   * @param  {Object} user
   * @param  {String} category  The requested category
   * @return {any}              The requested value for that category (e.g. 19)
   */
   static getUserInfo(user, category) {
    if (user === undefined) {
      return null;
    }
    return user.info[category];
  }

  // EVENTS & ACTIVITIES

  /**
   * Retrieve the user's activity total for that category on that day. If an 
   * activity object does not exist for that date (because the user did not
   * record any activity that day), return NULL (not 0!). If there is activity
   * that day but just no activity for that category, return 0.
   * 
   * If the user object is undefined (because the promise has not been fulfilled),
   * return null.
   * 
   * Example: getActivityTotal(activeUser, "gaming", "2021-04-20") === 1.75
   * @param  {String} userId    The user's unique id.
   * @param  {String} category  The type of activity.
   * @param  {String} date      The date for the requested totals.
   * @return {Number}           Activity in hours.
   */
  static getActivityTotal(user, category, date) {
    if (user === undefined || user.activities === undefined) {
      return "User was undefined when getActivityTotal was called";
    }
    const days = user.activities;
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      if (day.date === date) {
        if (category in day) {
          return day[category];
        }
        else {
          return 0;
        }
      }
    }
    return "Date " + date + " was not found in user' activity";
  }

  /**
   * Retrieve all of the user's events for that day. Used to make the dashboard
   * timeline.
   * @param  {String} date      The date.
   * @return {Array}            An array of event objects.
   */
   static getAllEvents(userId, date) {
    // TODO
    return;
  }

  /**
   * Add a new event to the user's activity for that day. If this is the first
   * event of the day, a new activity object should be made for that day in the
   * server. This function MUST update that day's activity totals. Do not
   * add the event if its duration is zero, or if its arguments don't make sense.
   * Duration should be calculated based on the start and end times. Start and
   * end times should be in increments of 15 minutes. The only optional argument is
   * description, all others are required.
   * 
   * Be sure to check the arguments: we don't know what the user put in!
   * @param  {String} userId  
   * @param  {String} name          Also known as the category.
   * @param  {String} start         When the event started.
   * @param  {String} end           When the event ended.
   * @param  {String} description   Optional description of the event.
   * @return {Number}               0 on success, -1 on failure. 
   */
   static addEvent(userId, name, start, end, description) {
    // check that start and end are in the correct format
    const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])T(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d) [+|-]\d\d:\d\d$/;
    if (!start.match(dateRegex) || !end.match(dateRegex) || start === end) {
      console.log("Improper date format!");
      return;
    }

    const duration = this.calculateDuration(start, end);
    if (duration <= 0) {
      console.log("Invalid event duration.");
      return;
    }

    // create the POST request body
    const event = { "name": name, "start": start, "end": end, "duration": duration, "description": description}
    
    const postData = async () => {
      const url = "api/users/create/" + userId + "/";
      const res = await axios.post(url, event);
      return res.data;
    }
    const promise = postData();
    return promise;
  }

  /**
   * TODO: How will this be implemented?
   */
   static deleteEvent(userId, name, start) {
    // TODO
    return;
  }

  /**
   * TODO: How will this be implemented?
   */
   static editEventName(userId, name, start) {
    // TODO
    return;
  }

  /**
   * TODO: How will this be implemented?
   */
   static editEventStart(userId, name, start) {
    // TODO
    return;
  }

  /**
   * TODO: How will this be implemented?
   */
   static editEventEnd(userId, name, start) {
    // TODO
    return;
  }

  /**
   * TODO: How will this be implemented?
   */
   static editEventDescription(userId, name, start) {
    // TODO
    return;
  }

  // GOALS

  /**
   * Retrieve the user's current goal for the given category.
   * @param  {String} userId  
   * @param  {String} category      The goal category.
   * @return {Number}               The goal in hours.
   */
  static getGoal(userId, category) {
    // TODO
    return;
  }

  /**
   * Set the user's goal for the category to value. Setting the goal to NULL
   * is the same as deleting the goal. Setting it to zero is different.
   * @param  {String} userId
   * @param  {String} category    The goal category.
   * @param  {Number} value       The goal in hours.
   * @return {Number}             0 on success, -1 on failure.
   */
   static setGoal(userId, category, value) {
    // TODO
    return;
  }

  // COMMUNITY DATA

  /**
   * Retrieve the community data for the specified category.
   * @param  {String} category
   * @return {Array}              An array of hours spent on that category.
   */
   static getCommunityData(category) {
    // TODO
    return;
  }

  // DATA FORMATTING UTILITIES

  /**
   * Convert the time to the standard format, which is YYYY-MM-DDTHH:MM:00 +07:00.
   * @param  {Number} year
   * @param  {Number} month
   * @param  {Number} day
   * @param  {Number} hour    In 24 hour time.
   * @param  {Number} minute
   * @return {String}
   */
  static formatDate(year, month, day, hour, minute){
    let result = "" + year + "-";
    if (month >= 10) {
      result = result + month + "-";;
    }
    else{
      result = result + "0" + month + "-";
    }
    if (day >= 10) {
      result = result + day + "T";
    }
    else{
      result = result + "0" + day + "T";
    }
    if (hour >= 10) {
      result = result + hour + ":";
    }
    else{
      result = result + "0" + hour + ":";
    }
    if (minute >= 10) {
      result = result + minute + ":00 +07:00";
    }
    else{
      result = result + "0" + minute + ":00 +07:00";
    }
    return result;
  }

  /**
   * Calculate duration in hours based on two dates in standard format,
   * YYYY-MM-DDTHH:MM:00 +07:00.
   * @param  {String} start
   * @param  {String} end
   * @return {Number}         Duration in hours.
   */
  static calculateDuration(start, end){
    const yearStart = parseInt(start.substring(0,4));
    const monthStart = parseInt(start.substring(5,7));
    const dayStart = parseInt(start.substring(8,10));
    const hourStart = parseInt(start.substring(11,13));
    const minuteStart = parseInt(start.substring(14,16));

    const yearEnd = parseInt(end.substring(0,4));
    const monthEnd = parseInt(end.substring(5,7));
    const dayEnd = parseInt(end.substring(8,10));
    const hourEnd = parseInt(end.substring(11,13));
    const minuteEnd = parseInt(end.substring(14,16));

    const startDateObj = new Date(yearStart, monthStart, dayStart, hourStart, minuteStart);
    const endDateObj = new Date(yearEnd, monthEnd, dayEnd, hourEnd, minuteEnd);
    return (endDateObj - startDateObj)/3600000;
  }

}

export default Utils;
