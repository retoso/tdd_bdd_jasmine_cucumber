const Cliente = require('../../models/cliente')


describe('Clientes', ()=> {
    beforeEach(() => {
        })
        it ('Valida propriedades', () => {
            let cliente = Cliente.primeiro();
            expect(cliente.id).not.toBeUndefined()
            expect(cliente.nome).not.toBeUndefined()
            expect(cliente.telefone).not.toBeUndefined()
        });

    it ('Retorna todos', () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
    });

    it ('Nome do cliente em upercase', () => {
        let cliente = Cliente.primeiro();
        cliente.nome = "renato"
        expect(cliente.nomeUpercase()).toEqual("RENATO")
    });
})