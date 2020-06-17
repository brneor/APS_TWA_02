function start() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "main";
    mainContainer.classList.add("main-container");
    document.body.appendChild(mainContainer);

    let title = document.createElement("h1");
    title.innerHTML = "Calcular Área do Triângulo";
    mainContainer.appendChild(title);

    let container = document.createElement("div");
    container.classList.add("container");
    mainContainer.appendChild(container);

    let col1 = document.createElement("div");
    
    col1.classList.add("col");
    let lBase = document.createElement("label");
    lBase.setAttribute("for", "iBase");
    lBase.innerHTML = "Base";
    col1.appendChild(lBase);

    let iBase = document.createElement("input");
    iBase.type = "text";
    iBase.name = "iBase";
    iBase.id = "iBase"
    iBase.placeholder = "metros";
    col1.appendChild(iBase);

    let lAltura = document.createElement("label");
    lAltura.setAttribute("for", "iAltura");
    lAltura.innerHTML = "Altura";
    col1.appendChild(lAltura);

    let iAltura = document.createElement("input");
    iAltura.type = "text";
    iAltura.name = "iAltura";
    iAltura.id = "iAltura"
    iAltura.placeholder = "metros";
    col1.appendChild(iAltura);

    let triangulo = document.createElement("img");
    triangulo.src = "resources/triangulo.png";
    triangulo.alt = "triangulo";
    col1.appendChild(triangulo);

    container.appendChild(col1);

    let col2 = document.createElement("div");
    col2.classList.add("col");

    let formula = document.createElement("img");
    formula.src = "resources/formulaTriangulo.png";
    formula.alt = "formula";
    col2.appendChild(formula);
    
    let calcular = document.createElement("input");
    calcular.type = "button";
    calcular.classList.add("button");
    calcular.value = "Calcular Área";
    calcular.onclick = function(){calculaArea();};
    col2.appendChild(calcular);

    container.appendChild(col2);
}

function calculaArea() {
    let base = parseFloat(document.querySelector("#iBase").value);
    let altura = parseFloat(document.querySelector("#iAltura").value);
    
    if (base && altura) {
        if (document.querySelector("#result")) {
            document.querySelector("#result").remove();
        }

        let mainContainer = document.querySelector("#main");
        let result = document.createElement("div");
        result.id = "result";
        mainContainer.appendChild(result);

        let resultTitle = document.createElement("h1");
        resultTitle.innerHTML = "Resultado";
        result.appendChild(resultTitle);

        resultContainer = document.createElement("div");
        resultContainer.classList.add("container");
        result.appendChild(resultContainer);

        let col = document.createElement("div");
        let lResult = document.createElement("label");
        lResult.setAttribute("for", "iBase");
        lResult.innerHTML = "Superfície Triângulo";
        col.appendChild(lResult);

        let iResult = document.createElement("input");
        iResult.type = "text";
        iResult.name = "iResult";
        iResult.id = "iResult"
        iResult.disabled = true;
        iResult.value = base * altura / 2;
        col.appendChild(iResult);

        resultContainer.appendChild(col);
    } else {
        alert("Iforme a base e a altura!");
    }
}