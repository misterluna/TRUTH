class BackendHelper {

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
   * Retrieve userId's information for the given category.
   * @param  {String} userId    The user's unique id.
   * @param  {String} category  The category of data we're requesting (e.g. Age)
   * @return {String}           The requested value for that category (e.g. 19)
   */
   static getUserInfo(userId, category) {
    // TODO
    return;
  }

  /**
   * Set userId's information in the database to be the given value for the
   * given category.
   * @param  {String} userId The user's unique id.
   * @return {Number}        0 on success, -1 on failure. 
   */
   static setUserInfo(userId, category, value) {
    // TODO
    return;
  }

  // EVENTS & ACTIVITIES

  /**
   * Retrieve the user's activity total for that category on that day. If an 
   * activity object does not exist for that date (because the user did not
   * record any activity that day), return NULL (not 0!). If there is activity
   * that day but just no activity for that category, return 0.
   * @param  {String} userId    The user's unique id.
   * @param  {String} category  The type of activity.
   * @param  {String} date      The date for the requested totals.
   * @return {Number}           Activity in hours.
   */
  static getActivityTotal(userId, category, date) {
    // TODO
    return;
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
   * @param  {String} userId        The user's unique id.
   * @param  {String} name          Also known as the category.
   * @param  {String} start         When the event started.
   * @param  {String} end           When the event ended.
   * @param  {String} description   Optional description of the event.
   * @return {Number}               0 on success, -1 on failure. 
   */
   static addEvent(userId, name, start, end, description) {
    // TODO
    return;
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
   * @param  {String} userId        The user's unique id.
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
   * @param  {String} userId      The user's unique id.
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

}

export default BackendHelper;
