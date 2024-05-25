//Form interaction
const form = document.getElementById('form')
//const input = document.getElementById("myInput").value;

const sayHello = () => {
  document.body.style.background = 'red'
}

form.addEventListener('submit', async (event)=>{
  event.preventDefault();

  const [tab] = await chrome.tabs.query({active:true, currentWindow: true})

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: sayHello,
  })
})

