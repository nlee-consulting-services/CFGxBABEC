import Plot from 'react-plotly.js'

function returnBarGraph(data, height, width, margin, title){
    console.log("okay here now", data);
    return <Plot id='temp' 
    data = {
        [
            {
                x:data[0],
                y:data[1],
                name: "Insect Count",
                yaxis: 'y1',
                type:'bar'
            },
            {
                x:data[0],
                y:data[2],
                yaxis: 'y2',
                name: "Wolbachia Percentage",
                type:'line'
            }
        ]
    }
    layout = {{width:width, height:height, title:title, margin:margin,
        legend:{
            orientation:"h",
            yanchor:"bottom",
            y:-.3,
            xanchor:"right",
            x:1}, 
          yaxis1:{
            title: 'Insect Count',
            side: 'left'
            },
          yaxis2:{
            title: 'Wolbachia Presence %',
            range:[0, 1.05],
            tickformat: ',.0%',
            overlaying: 'y',
            side: 'right'
            },
            font:{size:9}
        }}>

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
    layout = {{margin:margin, barmode:'grouped', width:width, height:height, title:title, 
                legend:{
                    orientation:"h",
                    yanchor:"bottom",
                    y:-.3,
                    xanchor:"right",
                    x:1},    
                yaxis1:{
                    title: 'Insect Count',
                    side: 'left'
                    },
                    font:{size:9}, 
    }}>

    </Plot>, secondary]
}

function getLocations(data){
    var locsSet = new Set([]);
    var locs = [];
    for (var index in data){
        const latitude = Math.round(data[index].location_lat * 1000) / 1000;
        const longitude = Math.round(data[index].location_lon * 1000) / 1000;

        if (!locsSet.has(latitude * 1000 + longitude)){
            locsSet.add(latitude * 1000 + longitude);
            locs.push([latitude, longitude]);
        }
    }
    return locs;
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
    var locs = getLocations(ogValues);
    var wolbPresences = new Object();

    for (var index in ogValues){
        const order_name = ogValues[index].order_name;
        const wolbachia_presence = ogValues[index].wolbachia_presence;
        const latitude = Math.round(ogValues[index].location_lat * 1000) / 1000;
        const longitude = Math.round(ogValues[index].location_lon * 1000) / 1000;

        if (location.length == 0 || (location[0] == latitude && location[1] == longitude)){
            if (wolbPresences[order_name] == undefined){
                wolbPresences[order_name] = [0,0,0];
            }
            if (wolbachia_presence == 'yes'){
                wolbPresences[order_name][0]++;
            }
            else if(wolbachia_presence == 'no'){
                wolbPresences[order_name][1]++;
            } 
            else{
                wolbPresences[order_name][2]++;
            }
        }
    }
    return [wolbPresences, locs, ogValues, ogWolbPresences];
}

async function dailyInsectData(data = null, location=[]){
    var ogValues;
    if (data == null){
        ogValues = await getRecords();
    }
    else{
        ogValues = data;
    }
    var locs = getLocations(ogValues);
    var perDay = new Object();
    var wolbNumsPerDay = [];
    for (var index in ogValues){
        const wolbachiaPresence = ogValues[index].wolbachia_presence;
        const collectionDate = ogValues[index].collection_date;
        const latitude = Math.round(ogValues[index].location_lat * 1000) / 1000;
        const longitude = Math.round(ogValues[index].location_lon * 1000) / 1000;

        if (location.length == 0 || (location[0] == latitude && location[1] == longitude)){
            if (perDay[collectionDate] == undefined){
                perDay[collectionDate] = [0, 0];
            }
            perDay[collectionDate][0]++;
            if (wolbachiaPresence == 'yes'){
                perDay[collectionDate][1]++;
            }
        }
    }
    const orderedPerDay = Object.keys(perDay).sort().reduce(
        (obj, key) => { 
          obj[key] = perDay[key]; 
          return obj;
        }, 
        {}
      );
    var dates = [];
    var insectNumsPerDay = [];
    var wolbPercentPerDay = [];
    for (const [key, value] of Object.entries(orderedPerDay)){
        dates.push(key);
        insectNumsPerDay.push(value[0]);
        console.log(value[0], value[1])
        wolbPercentPerDay.push(value[1]/(value[0]));
    }
    console.log(insectNumsPerDay, wolbNumsPerDay, dates);
    return [dates, insectNumsPerDay, wolbPercentPerDay, locs, ogValues];
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

export {returnBarGraph, returnGroupedBarGraph, wolbachiaPerInsectData, dailyInsectData, getAllLocs}