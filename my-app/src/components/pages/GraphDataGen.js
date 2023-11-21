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

async function returnGroupedBarGraph(data, height, width, margin, title){
    var groupedData = await data();
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
    return <Plot id='temp' 
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

    </Plot> 
}

function tempData(){
    return [[1,2,3], [4,5,6]];
}

async function wolbachiaPerInsectData(){
    var values = await useRecords();
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
                        }
                    )
    return response.json();
}

export {returnBarGraph, returnGroupedBarGraph, tempData, wolbachiaPerInsectData}