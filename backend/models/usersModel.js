import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const activitySchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    sleep: {
        type: String,
        required: false
    },
    class: {
        type: String,
        required: false
    },
    outdoors: {
        type: Number,
        required: false
    },
    exercise: {
        type: Number,
        required: false
    },
    eat: {
        type: Number,
        required: false
    },
    study: {
        type: Number,
        required: false
    },
    socialize: {
        type: Number,
        required: false
    },
    gaming: {
        type: Number,
        required: false
    },
    travel_commute: {
        type: Number,
        required: false
    },
    other: {
        type: Number,
        required: false
    },
    events: [eventSchema]
});

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    info: {
        type: Object,
        required: true,
        unique:true
    },
    goals: {
        type: Object,
        required: true,
        unique:true
    },
    activities: [activitySchema]
});

const User = mongoose.model('User', userSchema);

export default User;