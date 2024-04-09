import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken, isSupported } from "firebase/messaging";
//import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {

};

let messaging = null;
try {
  if (isSupported()) {
    console.log('isSupported() is true')
    // Retrieve Firebase Messaging object
    messaging = getMessaging(initializeApp(firebaseConfig));
  }
} catch (e) {
  console.error(e)
}


export const firebaseMessaging = messaging;

export const onMessageListener = () =>
  new Promise((resolve) => {
      if (firebaseMessaging) {
        onMessage(firebaseMessaging, (payload) => {
          resolve(payload);
        });
      }
  });

export const generateAndSaveFirebaseToken = async () => {
//  if (!firebaseMessaging) {
//    return false;
//  }
//  try {
//    const token = await getToken(firebaseMessaging, {vapidKey : process.env.REACT_APP_FIREBASE_VAPID_KEY});
//    // save the token using redux thunk
//    const result = await handleSendFCMToken({ token });
//    if (result) {
//      console.log('FCM token generated. Successfully saved on the server.')
//    } else {
//      throw new Error('Firebase token was not saved on the server')
//    }
//    return true
//  } catch (err) {
//    console.error('Firebase token generation failed', err)
//    return false;
//  }
}

export const handleSendFCMToken = async({ token }) => {
//  try {
//    // 1 - get array of user's registered devices
//    const fcmDevices = [];
//    // 2 - is this device in the array? Return its ID. Otherwise create a new ID
//    const deviceUid = generateDeviceUid(fcmDevices || [])
//    // 3 - set the FCM token with this ID on the server
//    const result = await ApiCall.post('account/messaging/token', { token : token, device_id: deviceUid, user_agent: window.navigator.userAgent });
//    // 4 - save token
//    localStorage.setItem('fcm_token', result);
//    return result;
//  } catch (e) {
//    console.error(e)
//    return false
//  }
}

//export const generateDeviceUid = (alreadyRegisteredDevices) => {
//  const deviceUid = localStorage.getItem("device_uid");
//  if (deviceUid && alreadyRegisteredDevices.includes(deviceUid)) {
//    // return current device id
//    return deviceUid;
//  } else {
//    // generate new device id by using uuid, which is more than enough unique
//    const newDeviceUid = 'WEB_' + uuidv4();
//    localStorage.setItem("device_uid", newDeviceUid);
//    return newDeviceUid
//  }
//}
//
///**
// * Loads and saves current user data
// */
//export const handleLoadCurrentUser = () => async (dispatch) => {
//  try {
////    const user = await userApi.requestCurrentUser()
////    dispatch(loadUserSuccess(user))
//  } catch (e) {
//    console.error(e)
//  }
//}
