import { jugadores } from "./db.js";


export const traerJugadores = (req, res) => {
  res.send(jugadores);
};
export const agregarJugador = (req, res) => {
    const { nombre, equipo } = req.body;
    
    const nuevoJugador = { nombre, equipo };
    jugadores.push(nuevoJugador);
}
export const actualizarJugador = (req, res) => {
  const { id } = req.params;
  const { nombre_jugador, email, password } = req.body;

  const i = jugadores.findIndex(jugador => jugador.id_jugador === id);
//findIndex es un método de array en JavaScript que busca un elemento en el array que cumple con una condición dada.

  if (i !== -1) {

    jugadores[i].nombre_jugador = nombre_jugador || jugadores[i].nombre_jugador;
    jugadores[i].email = email || jugadores[i].email;
    jugadores[i].password = password || jugadores[i].password;

    res.json({ mensaje: `Jugador actualizado` });
  } else {
    res.json({ mensaje: `Jugador no encontrado` });
  }
}
export const eliminarJugador = (req, res) => {
  const { id } = req.params;
  const index = jugadores.findIndex(jugador => jugador.id_jugador === id);

  if (index !== -1) {
    jugadores.splice(index, 1);
    res.json({ mensaje: `Jugador eliminado` });
  } else {
    res.json({ mensaje: `Jugador no encontrado` });
  }
};
