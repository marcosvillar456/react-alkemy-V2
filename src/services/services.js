export async function getAllHeroes(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}
var getlocal = localStorage.getItem("team");
export async function ObtenerDatosStorage() {
  if (
    getlocal !== null &&
    getlocal !== "" &&
    getlocal !== false &&
    getlocal !== undefined
  ) {
  } else {
    localStorage.setItem("team", "");
  }
}
