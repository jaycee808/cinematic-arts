import connectDatabase from '../../../config/database';
import CourseUnit from '../../../models/CourseUnit';

export const GET = async (request) => {
    try {
        console.log('Connecting to the database...')
        await connectDatabase();
        console.log('Yes! We have connected to the database!')

        const courseData = await CourseUnit.find({});
        console.log('Retrieved Course data:', courseData);
        
        return new Response(JSON.stringify(courseData), { status: 200 });
    } catch (error) {
        console.error('Error retrieving course units:', error);
        return new Response('Failed to retrieve course units', { status: 500 });
    }
};