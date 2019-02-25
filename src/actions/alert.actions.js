import { NotificationManager} from 'react-notifications';
export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};


const success = message => (dispatch) => {
    NotificationManager.success(message,'',2000);
    return { type: alertConstants.SUCCESS, message };
}
const error = message => (dispatch) => {
    var msg = message;
    if(message.error)  msg = message.error;
    NotificationManager.warning(message,'',2000);
    return { type: alertConstants.ERROR, msg };
}
const clear = (dispatch) => {
    return { type: alertConstants.CLEAR };
}
export default { success, error, clear };