export async function getAllHeroes(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function ObtenerDatosStorage() {
  var getlocal = localStorage.getItem("team");
  if (
    getlocal !== null &&
    getlocal !== "" &&
    getlocal !== false &&
    getlocal !== undefined
  ) {
  } else {
    localStorage.setItem("team", JSON.stringify([]));
  }
}
export async function Delete(id) {
  let local = JSON.parse(localStorage.getItem("team"));
  let getlocal = local.slice();
  for (let i = 0; i < getlocal.length; i++) {
    if (getlocal[i] === id) {
      getlocal.splice(i, 1);
      localStorage.removeItem("equipo");
      localStorage.setItem("team", JSON.stringify(getlocal));
      window.location.reload();
    }
  }
}
