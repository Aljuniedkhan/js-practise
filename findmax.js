const heights = [65, 66, 68, 72, 78, 60, 65, 66]

// console.log(Math.max(...heights));

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(Math.max(...numbers));

function maxheight(heights) {
    let maxnum=heights[0];
    for(const height of heights){  
        if(height>maxnum){
            maxnum=height;
           }
    }
    
    console.log(maxnum);
}

maxheight(heights)