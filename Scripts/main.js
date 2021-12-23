"use strict";
let clickCounterArr = [];
function tClickCounter(t_this) {
    if (t_this.value != "") {
        clickCounterArr.push(t_this.value);
    }
    // console.log(clickCounterArr);
    // console.log(clickCounterArr.length);
}

// CREATE HEADER 
function tCreateH1_options() {
    // remove function()
    tRemove();
    // HEADER INPUT
    function tCreateHeaderText() {
        let headerText = document.createElement("INPUT");
        headerText.setAttribute("id", "id_headertextInput");
        headerText.setAttribute("class", "form-control");
        headerText.setAttribute("placeholder", "Header text")
        document.getElementById("id_HeaderText").appendChild(headerText);
    }

    // HEADER FONT FAMILY
    function tCreateFontFamily() {
        let fontFamily = document.createElement("SELECT");
        fontFamily.setAttribute("id", "id_fontFamilySelect");
        fontFamily.setAttribute("class", "form-control");
        document.getElementById("id_FontFamily").appendChild(fontFamily);

        let option_1 = document.createElement("OPTION");
        option_1.innerHTML = "-SELECT-";
        option_1.setAttribute("value", "sans-serif")

        let option_2 = document.createElement("OPTION");
        option_2.innerHTML = "Times New Roman";
        option_2.setAttribute("value", "Times New Roman");

        let option_3 = document.createElement("OPTION");
        option_3.innerHTML = "Poppins";
        option_3.setAttribute("value", "Poppins");

        let option_4 = document.createElement("OPTION");
        option_4.innerHTML = "Verdana";
        option_4.setAttribute("value", "Verdana");

        let option_5 = document.createElement("OPTION");
        option_5.innerHTML = "Cursive";
        option_5.setAttribute("value", "cursive");

        let option_6 = document.createElement("OPTION");
        option_6.innerHTML = "Monospace";
        option_6.setAttribute("value", "monospace");

        document.getElementById("id_fontFamilySelect").append(option_1, option_2, option_3, option_4, option_5, option_6);
    }

    // HEADER FONT SIZE
    function tCreateFontSize() {
        let fontSize = document.createElement("SELECT");
        fontSize.setAttribute("id", "id_fonSizeSelect");
        fontSize.setAttribute("class", "form-control");
        document.getElementById("id_FontSize").appendChild(fontSize);

        let option_1 = document.createElement("OPTION");
        option_1.innerHTML = "-SELECT-";
        option_1.setAttribute("value", "h1")

        let option_2 = document.createElement("OPTION");
        option_2.innerHTML = "Smaller";
        option_2.setAttribute("value", "h5");

        let option_3 = document.createElement("OPTION");
        option_3.innerHTML = "Smal";
        option_3.setAttribute("value", "h4");

        let option_4 = document.createElement("OPTION");
        option_4.innerHTML = "Medium";
        option_4.setAttribute("value", "h3");

        let option_5 = document.createElement("OPTION");
        option_5.innerHTML = "Large";
        option_5.setAttribute("value", "h2");

        let option_6 = document.createElement("OPTION");
        option_6.innerHTML = "Larger";
        option_6.setAttribute("value", "h1");

        document.getElementById("id_fonSizeSelect").append(option_1, option_2, option_3, option_4, option_5, option_6);
    }
    function tCreateSubmit() {
        let t_submit = document.createElement("BUTTON");
        t_submit.innerHTML = "Submit";
        t_submit.setAttribute("id", "id_headerSubmitButton");
        t_submit.setAttribute("class", "btn btn-primary");
        t_submit.setAttribute("onclick", "tCreate('H1')");
        document.getElementById("id_headerSubmit").appendChild(t_submit);

    }
    function tCreateClear() {
        let tClear = document.createElement("BUTTON");
        tClear.innerHTML = "Clear";
        tClear.setAttribute("id", "id_clearButton");
        tClear.setAttribute("class", "btn btn-primary");
        tClear.setAttribute("style", "margin-left:10px;")
        tClear.setAttribute("onclick", "ClearFunction('H1');")
        document.getElementById("id_headerSubmit").appendChild(tClear);
    }
    tCreateHeaderText();
    tCreateFontFamily();
    tCreateFontSize();
    tCreateSubmit();
    tCreateClear();
    // tCreate("H1");
}

// CREATE TEXT
function tCreateP_options() {
    tRemove()
    function tTextInput(){
        let textInput = document.createElement("INPUT");
        textInput.setAttribute("id", "id_textInput");
        textInput.setAttribute("placeholder", "Type");
        textInput.setAttribute("class", "form-control");
        document.getElementById("id_textP").appendChild(textInput);
    }
    function tCreateTextSubmit() {
        let t_submit = document.createElement("BUTTON");
        t_submit.innerHTML = "Submit";
        t_submit.setAttribute("id", "id_textSubmitButton");
        t_submit.setAttribute("class", "btn btn-primary");
        t_submit.setAttribute("onclick", "tCreate('P')");
        document.getElementById("id_textSubmit").appendChild(t_submit);

    }
    function tCreateTextClear() {
        let tClear = document.createElement("BUTTON");
        tClear.innerHTML = "Clear";
        tClear.setAttribute("id", "id_clearTextButton");
        tClear.setAttribute("class", "btn btn-primary");
        tClear.setAttribute("style", "margin-left:10px;")
        tClear.setAttribute("onclick", "ClearFunction('P');")
        document.getElementById("id_textSubmit").appendChild(tClear);
    }

    tTextInput();
    tCreateTextSubmit();
    tCreateTextClear();
}

// CREATE LIST
function tCreateUL_options() {
    tRemove();

    function tCreateListStyle() {
        let listStyle = document.createElement("SELECT");
        listStyle.setAttribute("id", "id_listStyleSelect");
        listStyle.setAttribute("class", "form-control");
        document.getElementById("id_ListStyle").appendChild(listStyle);
    }

}

// CREATE DIV (FIGURE)
// function tCreateDIV_options() {
//     // console.log("div");
// }

// CTREATE BUTTON
// function tCreateBUTTON_options() {
//     // console.log("button");
// }


// CREATE 
function tCreate(tagname) {
    // document.getElementById("tRightSide").innerHTML = "";
    switch (tagname) {
        case "H1":
            let t_element = document.getElementById("id_tElements").value;
            let t_h1 = document.createElement(document.getElementById("id_fonSizeSelect").value);
            t_h1.innerHTML = document.getElementById("id_headertextInput").value;
            t_h1.style.fontFamily = document.getElementById("id_fontFamilySelect").value;
            t_h1.setAttribute("class", "displayFlex");
            document.getElementById("tRightSide").appendChild(t_h1);
        break;
        case "P":
            let t_elementP = document.createElement("P");
            t_elementP.innerHTML = document.getElementById("id_textInput").value;
            t_elementP.setAttribute("class", "displayFlex");
            document.getElementById("tRightSide").appendChild(t_elementP);
        break;
    }
}

function tSelectedElement(t_this) {
    let tValue = t_this.value;
    switch (tValue) {
        case "H1":
            tCreateH1_options();
            break;

        case "P":
            tCreateP_options();
            break;

        case "UL":
            tCreateUL_options();
            break;

        case "DIV":
            tCreateDIV_options();
            break;

        case "BUTTON":
            tCreateBUTTON_options();
        break;
    }
}

function tRemove() {
    let tagname;
    if (clickCounterArr.length > 1) {
        tagname = clickCounterArr[0];
        // console.log(tagname);
    }
    tRemoveOptions(tagname);
}

function tRemoveOptions(tagname) {
    switch (tagname) {
        case "H1":
            document.getElementById("id_headertextInput").remove();
            document.getElementById("id_fontFamilySelect").remove();
            document.getElementById("id_fonSizeSelect").remove();
            document.getElementById("id_headerSubmitButton").remove();
            document.getElementById("id_clearButton").remove();
            clickCounterArr.shift();
            break;

        case "P":
            document.getElementById("id_textInput").remove();
            document.getElementById("id_textSubmitButton").remove();
            document.getElementById("id_clearTextButton").remove();
            clickCounterArr.shift();
        break;

        // case "UL":
        //     // document.getElementById("id_textInput").remove();
        //     clickCounterArr.shift();
        //     break;
    }
}

function ClearFunction(tagname) {
    let t_element = document.getElementById("tRightSide");
    t_element.innerHTML = '';
    switch(tagname){
        case "H1":
            document.getElementById("id_headertextInput").value = "";
            document.getElementById("id_fontFamilySelect").value = "";
            document.getElementById("id_fonSizeSelect").value = "";
        break;
        case "P":
            document.getElementById("id_textInput").value = "";    
        break;
    }
}
