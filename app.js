import { traerJugadores, agregarJugador, actualizarJugador, eliminarJugador } from "./controller.js";
import express from "express"
const app=express()
app.use(express.json())

app.post("/agregarJugador", agregarJugador)
app.get("/", traerJugadores)
app.put("/actualizarJugador/:id", actualizarJugador)
app.delete("/eliminarJugador/:id", eliminarJugador)


app.listen(5000,()=>console.log("andando"))



