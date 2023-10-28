# language: es
Característica: Jugar al TaTeTi en linea

  Escenario: Nueva Partida
    Cuando "Juan" y "Pedro" empiezan una partida
    Entonces le toca mover a "Juan"
    Y el tablero esta vacio

  @wip
  Escenario: El primer jugador hace un movimiento
    Dado que "Juan" y "Pedro" empiezan una partida
    Cuando "Juan" marca la casilla 1
    Entonces le toca mover a "Pedro"
    Y el tablero tiene una X en la casilla 1
