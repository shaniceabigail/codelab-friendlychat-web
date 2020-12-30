importScripts('/__/firebase/6.0.4/firebase-app.js');
importScripts('/__/firebase/6.0.4/firebase-messaging.js');
importScripts('/__/firebase/init.js');

if('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
   console.log("Service Worker Registered");
  messaging.useServiceWorker(registration);  
    }); 
}

firebase.messaging();