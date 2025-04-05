import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission(): Promise<void> {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // Optionally save token to backend
  }
}

export function listenForForegroundNotifications() {
  return messaging().onMessage(async remoteMessage => {
    console.log('Foreground Notification:', remoteMessage.notification);
    // You can use Alert or a custom UI
  });
}
