# language: es
Característica: Jugar al TaTeTi en linea

  Escenario: Nueva Partida
    Cuando "Juan" y "Pedro" empiezan una partida
    Entonces le toca mover a "Juan"
    Y el tablero esta vacio

  Escenario: El primer jugador hace un movimiento
    Dado "Juan" y "Pedro" empiezan una partida
    Cuando "Juan" marca la fila 1 y la columna 1
    Entonces le toca mover a "Pedro"
    Y el tablero queda de la siguiente manera:
      | x |  |  |
      |   |  |  |
      |   |  |  |
