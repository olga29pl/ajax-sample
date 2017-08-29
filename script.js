document.getElementById('loaded').innerHTML =
  (new Date()).toLocaleTimeString();
  
document.querySelector('#client-data').addEventListener('click',
  getData);
  
document.querySelector('#btn-server-data').addEventListener('click', getHtmlData);
  
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200 ) {
      const data = JSON.parse(xhr.responseText);
      document.getElementById('client-name').innerHTML = data.name;
      document.getElementById('client-balance').innerHTML = data.balance;
    } 
  }
  xhr.open('GET', 'client-data.json', true);
  xhr.send();
}

function getHtmlData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200 ) {
      document.getElementById('server-data').innerHTML = xhr.responseText;
    } 
  }
  xhr.open('GET', 'part.html', true);
  xhr.send();
}  
