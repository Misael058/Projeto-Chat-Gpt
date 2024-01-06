let form = document.getElementById("formPergunta");
let minhaChave = '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';
let botao = document.getElementById("botao");
let result = document.getElementById("resultado");
if (form) {
    form.addEventListener("submit", async (e) => {

        e.preventDefault();
        let pergunta = document.getElementById("campoPergunta").value;
        document.getElementById("botao").value="pesquisando...";
        
        try {
            const response = await fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + minhaChave,
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: pergunta,
                    max_tokens: 2048,
                    temperature: 0.5,
                }),
            });

            const dados = await response.json();
            console.log(dados);

            document.getElementById("quiz").innerHTML = pergunta;
            result.innerHTML = dados.choices[0].text;
        } catch (error) {
            console.log("Error na verificacão", error);
        }
        document.getElementById("botao").value="pesquisar";
    });
}