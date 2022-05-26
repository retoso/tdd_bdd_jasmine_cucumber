Feature: Clients
Scenario: "List of clients"
    Given I'm have {10} clientes in my database
    When I acces the home webpage
    Then see the list od {10} itens
