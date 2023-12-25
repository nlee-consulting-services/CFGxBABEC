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

function returnGroupedBarGraph(data, height, width, margin, title){
    var groupedData = data;
    const secondary = groupedData[1];
    groupedData = groupedData[0];


    const x_vals = Object.keys(groupedData);
    const yes = [];
    const no = [];
    const inc = [];
    for (const [key, value] of Object.entries(groupedData)){
        // x_vals.push(key)
        yes.push(value[0]);
        no.push(value[1]);
        inc.push(value[2]);
    }

    return [<Plot id='graph' style={{overflowY:"auto"}}
    data = {
        [
            {
                x:x_vals,
                y:yes,
                type:'bar', 
                name:'Present',
                maker: {color:'red'}
            },
            {
                x:x_vals,
                y:no,
                type:'bar', 
                name:'Not Present',
                maker: {color:'red'}
            },
            {
                x:x_vals,
                y:inc,
                type:'bar', 
                name:'Inconclusive',
                maker: {color:'red'}
            }
        ]
    }
    layout = {{margin:margin, barmode:'grouped', width:width, height:height, title:title}}>

    </Plot>, secondary]
}

function tempData(){
    return [[1,2,3], [4,5,6]];
}

async function wolbachiaPerInsectData(data = null, location=[]){
    var ogValues;
    var ogWolbPresences;
    if (data == null){
        ogValues = await getRecords();
        ogWolbPresences = await getOrdersAsDict(); 
    }
    else{
        ogValues = data[0];
        ogWolbPresences = data[1]; 
    }
    var locsSet = new Set([]);
    var locs = [];
    var wolb_presences = new Object();
    for (var index in ogValues){
        const order_name = ogValues[index].order_name;
        const wolbachia_presence = ogValues[index].wolbachia_presence;
        
        const latitude = Math.round(ogValues[index].location_lat * 1000) / 1000;
        const longitude = Math.round(ogValues[index].location_lon * 1000) / 1000;

        if (!locsSet.has(latitude * longitude)){
            locsSet.add(latitude * longitude);
            locs.push([latitude, longitude]);
        }


        if (location.length == 0 || (location[0] == latitude && location[1] == longitude)){
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
    }
    return [wolb_presences, locs, ogValues, ogWolbPresences];
}

async function getAllLocs(){
    var values = await getRecords();
    var locs = new Set([]);

    for (var index in values){
        locs.push([values[index].location_lon, values[index].location_lat]);
    }
    return Array.from(locs);
}

async function getRecords() {
    const response = await fetch('https://cfgxbabec.onrender.com/records', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    )
    return response.json();
}

async function getOrdersAsDict() {
    const response = await fetch('https://cfgxbabec.onrender.com/orders', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    );
    const orders = {};
    const values = response.json();
    for (var index in values){
        orders[values[index].order_name] = [];
    }
    return orders;
}

export {returnBarGraph, returnGroupedBarGraph, tempData, wolbachiaPerInsectData, getAllLocs}