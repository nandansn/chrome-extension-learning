
console.log('hello')

let rootElement = document.getElementById('root')

chrome.storage.sync.get("color",  ({ color }) => {
    rootElement.style.backgroundColor = color;
  })


  rootElement.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getNetSales,
    });
  })


  function getNetSales() {
    // chrome.storage.sync.get("color", ({ color }) => {
    //   document.body.style.backgroundColor = color;
    // });

    let path = '//div[@id="fidicash"]/div/table/tbody/tr/td[4]';
    

    let result = document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    

    console.log(result.innerText);
  }

  // $x('//div[@id="fidicash"]/div/table/tbody/tr/td[4]')[0].innerText