## Chrome Extension Development

### Manifest File
- Manadatory file

### Properties in the manifest file:

- name:
- version:
- description:
- permissions: api permission. 
    - example ["storage","tabs"]
    - storage api to access the storage of the user browser
    - tabs api to access the tabs functionality of the browser
- host_permissions: what are the hosts can be accessed 
- service_workers
    - JS file that runs seperately from main browser thread
    - this means the content of the web page can't be accessed 
    - has the capability to speak to the extension using the extension messaging system
    - we need to add the background script
- content scripts:
    - can  interact with the content of the web page
    - we can use this to interact with the dom of the webpage
    - matches: what are the url patterns for the page
    - js: where the content script is located.
    - content script able to listen the message from the background.js and acces the object passed  
        - need to use chrome.runtime.onMessage.addListenener

- popup.html
    - this is used for interactivity


### API References
[Reference] (https://developer.chrome.com/docs/extensions/reference/)