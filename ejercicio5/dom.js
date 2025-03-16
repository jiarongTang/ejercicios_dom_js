const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  const body = document.querySelector('body');

  let ul = document.createElement("ul");
  let li;
  for(let i = 0; i < albums.length; i++){
    li = document.createElement("li");
    li.innerText = albums[i];
    ul.appendChild(li);
  }
  body.appendChild(ul);