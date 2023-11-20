import Plot from 'react-plotly.js'

function returnBarGraph(data, height, width, title){
    return <Plot id='temp' 
    data = {
        [
            {
                x:data()[0],
                y:data()[1],
                type:'bar', 
                mode:'lines+markers',
                maker: {color:'red'}
            }
        ]
    }
    layout = {{width:width, height:height, title:title}}>

    </Plot> 
}

async function returnGroupedBarGraph(data, height, width, title){
    const groupedData = await data();
    const x_vals = [];
    // Object.keys(groupedData);
    const yes = [];
    const no = [];
    const inc = [];
    for (value in groupedData){
        console.log("yooooo", value);
        yes.push(value[0]);
        no.push(value[1]);
        inc.push(value[2]);
    }

    return <Plot id='temp' 
    data = {
        [
            {
                x:{x_vals},
                y:{yes},
                name: 'Yes',
                type:'bar', 
                maker: {color:'red'}
            }
        ]
    }
    layout = {{barmode:'group', width:width, height:height, title:title}}>

    </Plot> 
}
function tempData(){
    return [[1,2,3], [4,5,6]];
}

async function wolbachiaPerInsectData(){
    const values = await useRecords();
    var wolb_presences = {}; 
    for (var index in values){
        const order_name = values[index].order_name;
        const wolbachia_presence = values[index].wolbachia_presence;
        if (wolb_presences[order_name] == undefined){
            wolb_presences[order_name] = [0,0,0];
        }
        if (wolbachia_presence == 'yes'){
            wolb_presences[order_name][0]++;
        }
        else if(wolbachia_presence == 'no'){
            wolb_presences[order_name][1]++;
        } 
        else{
            wolb_presences[order_name][2]++;
        }
    }
    return wolb_presences;
}

async function useRecords() {
    const response = await fetch('https://cfgxbabec.onrender.com/records', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const values = await response.json();
    return values;
}

export {returnBarGraph, returnGroupedBarGraph, tempData, wolbachiaPerInsectData}