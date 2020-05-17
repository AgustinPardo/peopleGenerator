  var contendio = document.querySelector("#contenido")
  var array_data=[]
  function traer(){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data =>  {
        var element = document.createElement('tr')
        element.innerHTML = `      
            <td>${data.results['0'].name.last}</td>
            <td>${data.results['0'].name.first}</td>
            <td>${data.results['0'].location.country}</td>
            <td>${data.results['0'].phone}</td>
            <td>${data.results['0'].cell}</td>`;
        contendio.appendChild(element);    
        array_data=array_data.concat(data.results['0']);
      }    
    );
}

function descargar() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + JSON.stringify(array_data));
  element.setAttribute('download', "data.json");
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

