import {useEffect} from 'react';
import {
  requestUserPermission,
  listenForForegroundNotifications,
} from '../services/notifications';

export const useNotifications = () => {
  useEffect(() => {
    requestUserPermission();

    const unsubscribe = listenForForegroundNotifications();

    return () => {
      unsubscribe();
    };
  }, []);
};
