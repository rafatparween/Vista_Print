// // components/JivoChat.js
// "use client"
// import { useEffect } from 'react';

// const JivoChat = () => {
//   useEffect(() => {
//     const loadJivoChatScript = () => {
//       const script = document.createElement('script');
//       script.src = "//code.jivosite.com/widget/NXU896TaVh";
//       script.async = true;
//       document.body.appendChild(script);
//       script.onload = () => {
//         if (window.JivoChat) {
//           window.JivoChat.on('onMessage', (message) => {
//             console.log('New message received:', message);

//           });
//           window.JivoChat.setSettings({
//             soundEnabled: true
//           });
//         }
//       };

//       return () => {
//         document.body.removeChild(script);
//       };
//     };

//     loadJivoChatScript();
//   }, []);

//   return null;
// };

// export default JivoChat;


"use client";
import { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.jivosite.com/widget/kd9uAKn19v"; // Updated script URL
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.JivoChat) {
        window.JivoChat.on('onMessage', (message) => {
          console.log('New message received:', message);
        });
        window.JivoChat.setSettings({
          soundEnabled: true,
        });
      }
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default JivoChat;

