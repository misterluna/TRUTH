import { getUsers, getUserById, createNewEvent, createNewGoal } from "../controllers/userController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)

// express router method to create route for adding user activity
router.route('/events/:id').post(createNewEvent)

// express router method to create route for adding goals
router.route('/goals/:id').post(createNewGoal)

export default router