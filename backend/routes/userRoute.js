import { getUsers, getUserById, createNewEvent } from "../controllers/userController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)

// express router method to create route for addingUserActivity
router.route('/events/:id').post(createNewEvent)

export default router