import Plot from 'react-plotly.js'

function returnBarGraph(data, height, width, title){
    return <Plot id='temp' data = {
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
function tempData(){
    return [[1,2,3], [4,5,6]];
}

export {returnBarGraph, tempData}