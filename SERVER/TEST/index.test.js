const app= require ("../SRC/app")
const session= require ("supertest")
const agent = session (app)

describe ("Test de ruta", ()=>{
    describe ("GET /rickandmorty/character/:id", ()=>{
        it ("Responde con status: 200", async ()=>{
            await agent.get ("/rickandmorty/character/1").expect (200);
        })
        it ("responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin', 'image'", 
        async ()=>{
            const {body}= await agent.get ("/rickandmorty/character/1");
            const atributes= [
                "id",
                "name",
                "species",
                "gender",
                "status",
                "origin",
                "image"
        ]
        const keys= Object.keys (body);
        atributes.forEach ((atribute)=>{
            expect (keys).toContain (atribute)
        })
        })
        it ("si haun error responde con el status: 500", async ()=>{
            await agent.get ("/rickandmorty/character/rutainexistente").expect (500);
        })
        })
        describe ("GET /rickandmorty/login", ()=>{
            it ("informacion sea correcta y nos de acceso", async ()=>{
                const {body}= await agent.get ("/rickandmorty/login?email=ejemplo@gmail.com&password=unaPass1");
                expect(body.access).toEqual(true)
            })
            it ("informacion sea incorrecta y no nos de acceso", async ()=>{
                const {body}= await agent.get ("/rickandmorty/login?email=ejemplo@gmail.com&password=incorrecto");
                expect(body.access).toEqual(false)
            })
        })

        describe ("POST /rickandmorty/fav", ()=>{
            const char1= {id:1, name: "Leo"};
            const char2= {id:2, name: "Agus"};

            it ("Devuelve un array con el personaje", async ()=>{
                const {body}= (await agent.post ("/rickandmorty/fav").send(char1));
                expect (body).toContainEqual (char1)
            })
            it ("AL enviar mas de un solo personaje devielve todos los elementos", async ()=>{
                const {body}= (await agent.post ("/rickandmorty/fav").send(char2));
                expect (body).toContainEqual (char1);
                expect (body).toContainEqual (char2)
            })
            })
            describe ("DELET /rickandmorty/fav/:id", ()=>{
                const char1= {id:1, name: "Leo"};
                const char2= {id:2, name: "Agus"};    
                //sino hibiese usado el anterior deberia postear por primera vez a char 1 y char 2, esto se podria
                //hacer con un hook, en este caso beforeALL (async()=>{
                //await agent.post ("/rickandmorty/fav").send (char1)
                //await agent.post ("/rickandmorty/fav").send (char1)
                //})
                it ("si no se envia un ID correcto se devuelve al mismo array", async ()=>{
                    const {body}= await agent.delete ("/rickandmorty/fav/ahshna");
                    expect (body).toContainEqual (char1);
                    expect (body).toContainEqual (char2);
                })
                it ("Se elimina correctamente si se envia el ID correcto", async ()=>{
                    const {body}= await agent.delete ("/rickandmorty/fav/1");
                    expect (body).not.toContainEqual (char1)
                   
                })
            })


        })