Feature: Achar o menor trajeto

    Como um usuário
    Quero que o sistema me mostre o menor trajeto entre duas estações do MetroSP
    Para que eu consiga chegar ao menor tempo no destino.

    Scenario: Calcular trajeto

Dado que o usuário acessar o APP
Quando o usuário selecionar o local de embarque e desembarque
Então a api deve calcular a menor rota
E retornar o trajeto para o usuário