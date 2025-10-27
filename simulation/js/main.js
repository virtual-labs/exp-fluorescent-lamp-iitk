//Your JavaScript goes in here
var enableButton = document.getElementById("enable");
var tubeButton = document.getElementById("tube-button");
var chokeButton = document.getElementById("chock-button");
var starterButton = document.getElementById("starter-button")
var ammeterButton = document.getElementById("amm-button");
var voltmeterButton = document.getElementById("volt-button")
var wattmeterButton = document.getElementById("wattmeter-button")
var supplyButton = document.getElementById("supply-button")
var connectButton = document.getElementById("connect-button")
var factorButton1 = document.getElementById("factor-1")
var factorButton2 = document.getElementById("factor-2")


var count = 0;

function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        tubeButton.disabled=false;
        document.getElementById("steps").innerHTML="Instructions : Click Flourescent Tube Button"
        count=1;
    }else{
        enableButton.style.backgroundColor="#ca2222"
        document.getElementById("steps").innerHTML="Instructions : Enable Power"
        tubeButton.disabled=true;
        count=0
    }
}



// var chokeImg = new Image();


function showTube(){
    const lamp = document.getElementById('lamp');

    if(count==1){
        //code svg image of tube here
        // document.getElementById("lamp").innerHTML.style.visibility="visible";
        //

        lamp.style.visibility = "visible";

        document.getElementById("steps").innerHTML="Instructions : Click on Starter Button"
        starterButton.disabled=false;
        count+=1
    }
}

function showStarter(){
    const starter = document.getElementById('starter');
    if(count==2){
        //code svg image of starter here
        // document.getElementById("starter").innerHTML.style.visibility="visible";
        starter.style.visibility = 'visible';
        //
        document.getElementById("steps").innerHTML="Instructions : Click on Choke Button"
        chokeButton.disabled=false;
        count+=1
    }
}

function showChoke(){
    if(count==3){
        //code svg image of chock here
        document.getElementById("choke").style.visibility="visible";

        //
        document.getElementById("steps").innerHTML="Instructions : Click on Ammeter Button"
        ammeterButton.disabled=false;
        count+=1
    }
}

function showAmmeter(){
    if(count==4){
        //code svg image of ammeter here
        document.getElementById("ammeter").style.visibility="visible";
        //
        document.getElementById("steps").innerHTML="Instructions : Click on Voltmeter Button"
        voltmeterButton.disabled=false;
        count+=1
    }
}

function showVoltmeter(){
    if(count==5){
        //code svg image of voltmeter here
        document.getElementById("voltmeter").style.visibility="visible";
        //
        document.getElementById("steps").innerHTML="Instructions : Click on Wattmeter Button"
        wattmeterButton.disabled=false;
        count+=1
    }
}

function showWattmeter(){
    if(count==6){
        //code svg image of wattmeter here
        document.getElementById("power").style.visibility="visible";
        //
        document.getElementById("steps").innerHTML="Instructions : Click on 1-phase supply Button"
        supplyButton.disabled=false;
        count+=1
    }
}

function showSupply(){
    if(count==7){
        //code svg image of supply here
        document.getElementById("supply").style.visibility="visible";
        //
        document.getElementById("steps").innerHTML="Instructions : Click on Connect Button to connect all apparatus"
        connectButton.disabled=false;
        count+=1
    }
}

function showWires(){
    if(count==8){
        //code svg image of wires here
        document.getElementById("Layer_1").style.visibility="visible";
        //
        factorButton1.disabled=false;
        factorButton2.disabled=false;
        document.getElementById("steps").innerHTML="Instructions : Select Wattmeter Multiplying Factor"
        document.getElementById("readings").innerHTML="Voltmeter : 220V    Ammeter : 0.3A"
        connectButton.disabled=false;
        count+=1
    }
}


function valueOfFactor1(){
    document.getElementById("steps").innerHTML="Instructions : Note the Result"
    document.getElementById("result").innerHTML="Wattmeter Reading : 25 Watts"
}

function valueOfFactor2(){
    document.getElementById("steps").innerHTML="Instructions : Note the Result"
    document.getElementById("result").innerHTML="Wattmeter Reading : 12.5 Watts"
}



