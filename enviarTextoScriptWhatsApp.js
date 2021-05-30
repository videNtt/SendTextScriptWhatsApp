// Função utilizada para enviar textos através de um script

function enviarTextoScript(textoScript){
    const linhas = textoScript.split("\n"); 

    let x = 0;       

    setInterval(() => { 
        if (x >= linhas.length) return

        if (linhas[x].trim() != ''){ 
            window.InputEvent = window.Event || window.InputEvent;
    
            const evento = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('div._2_1wd[data-tab="6"]');
    
            textbox.textContent = linhas[x];
    
            textbox.dispatchEvent(evento);
    
            document.querySelector("button._1E0Oz").click();                   

        }
        x++;
    }, 250)
}

// Envia o texto selecionado utilizando a função criada anteriormente

enviarTextoScript(`
Coloque o seu texto aqui

quebrado em várias linhas

sem problema de quantidade.

Divirta-se!
`);