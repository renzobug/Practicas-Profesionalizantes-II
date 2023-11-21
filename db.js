export { jugadores, categorias, preguntas };
const jugadores = [
{ 
  "id_jugador": 1, 
  "nombre_jugador": "Juan", 
  "email": "juan@hotmail.com", 
  "password": "12345" 
},
  
{ 
  "id_jugador": 2, 
  "nombre_jugador": "Martin", 
  "email": "martin2@hotmail.com", 
  "password": "98765" 
},
 
];
const categorias = [
{ 
  "id_categoria": 1, 
  "nombre_categoria": "sub20" 
},
  
{ 
  "id_categoria": 2, 
  "nombre_categoria": "1 division" 

}]

const preguntas = [
{ 
  "id_pregunta": 1, 
  "id_categoria": 1, 
  "nivel_dificultad": 1, 
  "texto_pregunta": "¿Que se siente estar en la Sub 20 de la seleccion?", 
  "respuesta_correcta": "Es un sueño echo realidad" 
},

{ 
  "id_pregunta": 2, 
  "id_categoria": 2, 
  "nivel_dificultad": 2, 
  "texto_pregunta": "¿Te gustaria irte a Europa al Manchester City?", 
  "respuesta_correcta": "Es un camino que poco pueden tomarlo" 
},

{ 
  "id_pregunta": 3, 
  "id_categoria": 2, 
  "nivel_dificultad": 1, 
  "texto_pregunta": "¿Te irias de tu pais para otro equipo?", 
  "respuesta_correcta": "Todos soñamos con jugar en Equipos de alto  nivel" 

}]

