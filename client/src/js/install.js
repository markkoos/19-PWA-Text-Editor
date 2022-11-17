const butInstall = document.getElementById('buttonInstall');
const h1 = document.getElementById(`h-1`);

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     butInstall.style.visibility = `visible`;
//     textHeader.textContent = `Click the button to install`;

    // TODO: Implement a click event handler on the `butInstall` element
//     butInstall.addEventListener('click', () => {
//         event.prompt();
//         butInstall.setAttribute(`disabled`, true);
//         butInstall.textContent = `Installed!`
//     });
// });


// TODO: Add an handler for the `appinstalled` event
// 

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 
