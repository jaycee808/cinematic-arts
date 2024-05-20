import { Schema, model, models } from 'mongoose';

const ScheduleSchema = new Schema({
    classType: {
        type: String,
        required: true,
    },
    timeOfDay: {
        type: String,
        required: true,
    },
    dayOfWeek: {
        type: String,
        required: true,
    },
    classStart: {
        type: String,
        required: true,
    },
    classEnd: {
        type: String,
        required: true,
    },
}, { _id: false });

const CourseUnitSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    aims: {
        type: [String],
        required: true,
    },
    recommendedWatching: {
        type: [String],
    },
    recommendedReading: {
        type: String,
        required: true,
    },
    credits: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    schedule: {
        type: [ScheduleSchema],
        required: true,
    },
}, { collection: 'courseUnits' });

const CourseUnit = models.CourseUnit || model('CourseUnit', CourseUnitSchema);

export default CourseUnit;