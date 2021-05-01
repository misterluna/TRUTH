class BackendHelper {
  static getUser(id) {
    return "Getting user with id: " + id;
  }

  static addActivity(activityObj) {
    return "Adding new activity: " + activityObj;
  }
}

export default BackendHelper;
