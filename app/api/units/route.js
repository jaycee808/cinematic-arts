import connectDatabase from '../../../config/database';
import CourseUnit from '../../../models/CourseUnit';

export const GET = async (request) => {
    try {
        await connectDatabase();
        const courseData = await CourseUnit.find({});
        return new Response(JSON.stringify(courseData), { status: 200 });
    } catch (error) {
        console.error('Error retrieving course units:', error);
        return new Response('Failed to retrieve course units', { status: 500 });
    }
};