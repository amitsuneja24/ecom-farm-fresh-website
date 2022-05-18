import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const getAllGroceryStaple = async (slug) => {
    try {
        let result = await api.get(Apis.GetAllGroceryStaple + slug);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default {
    getAllGroceryStaple,
};