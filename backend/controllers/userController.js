import User from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    res.json(users)
})

//getUserById function to retrieve user by id
export const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})

//createNewEvent function to add an event to a specific user
export const createNewEvent = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    //if user id match param id send user else throw error
    if(user){
        // Check if there is already an activity object for that day
        let activityObject;
        let activityObjectExists = user.activities.find(function(day, index) {
            if(day.date == req.body.start.substring(0, 10)){
                activityObject = day;
                return true;
            } 
        });
        if (!activityObjectExists) {
            console.log("Activity object does not exist for that date. Make one.");
            user.activities.push({
                "date": req.body.start.substring(0, 10),
                "events": []
            });
            user.activities.find(function(day, index) {
                if(day.date == req.body.start.substring(0, 10)){
                    activityObject = day;
                    return true;
                } 
            });
            activityObject[req.body.name] = parseFloat("0");
        }
        // Check if the event already exists (another event has the same start time)
        let eventExists = activityObject.events.find(function(event, index) {
            if(event.start == req.body.start){
                return true;
            } 
        });
        if (eventExists) {
            res.status(409).json({message: "Conflict"})
            res.status(409)
            throw new Error('Conflict')
        }
        // Add the new event to the user's activity object for that day.
        activityObject.events.push(req.body);
        // Update the user's total activity for that day.
        activityObject[req.body.name] = parseFloat(activityObject[req.body.name]) + parseFloat(req.body.duration);
        // Save the PARENT model (user). Saving the child model (activity or event) will not work.
        const updated = await user.save();
        res.status(200).json({message: "Event added."});
        

    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
    console.log("creating new event!", req.params)
})

//createNewGoal function to create a new goal for a specific user
export const createNewGoal  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.status(501).json({message: "Adding goals not implemented"})
        res.status(501)
        throw new Error('Adding goals not implemented')
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})