let api_key = 'ed95c3778a4f85eadb700d0a6b30eb5d';

let urlBase = 'http://api.openweathermap.org/data/2.5/weather';
let dfKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data));
    }
});
function mostrarDatosClima(data){
    console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML='';
    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description ;
    const paisNombre = data.sys.contry;
    const humedad = data.main.humidity;
    const icono = data.weather[0].icon;
    
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`;

    const coidadTemperatura = document.createElement('p');
    coidadTemperatura.textContent = `La temperatura es: ${Math.floor(temperatura-dfKelvin)}ºC`;

    const ciudadDescripcion = document.createElement('p');
    ciudadDescripcion.textContent = `La descripción meteorológica es: ${descripcion}`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;
    iconoInfo.style.backgroundColor = 'gray';
    
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(coidadTemperatura);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(ciudadDescripcion);
}