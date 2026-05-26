importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCk_rTdccHGEr49Zec_eGSJwfOOJPeHYdY",
    authDomain: "teamup-68a21.firebaseapp.com",
    projectId: "teamup-68a21",
    storageBucket: "teamup-68a21.firebasestorage.app",
    messagingSenderId: "379106762572",
    appId: "1:379106762572:web:b80b61d82df788cc0339e9",
    measurementId: "G-N88RGFQYFM"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || 'New message';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new message',
        icon: '/favicon.ico',
        data: payload.data
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
