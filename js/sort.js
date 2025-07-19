var isSorted = false;
function sortTable() {	
	var table = document.getElementById("videos");
	
	if(!isSorted)
	{	
		document.getElementById("sort").title = "Sort Alphabetically";
		var list = table.innerHTML.split('\n');
		var newSongs =[];
		var newSongsIndices=[];
		var c = 0;
		for(var i = 0 ; i < list.length; i++)
		{
			if(list[i].includes('target="_blank"'))
			{
				newSongs.push(list[i]);
				if(list[i].includes('(') && list[i].includes(')') )
				{
					//console.log(list[i]);
					var filmYear = parseInt(list[i].split('.jpg')[1].split("(")[1].split(")")[0] );
					newSongsIndices.push(filmYear);
					
				}
			}
		}	
		var sorted = sortArrays([newSongsIndices,newSongs]);	
		newSongs = sorted[1];
		table.innerHTML="";
		
		for (var i = 0 ; i < newSongs.length  ; i++) 
		{
			if(c==0)
				row= table.insertRow();
			
			let data = row.insertCell(c);
			if(newSongs[i].includes("'r'") ||newSongs[i].includes('"r"') )
			{
				data.classList.add('r');
			}
			if(newSongs[i].includes("'x'") ||newSongs[i].includes('"x"') )
			{
				data.classList.add('x');
			}
			data.innerHTML = newSongs[i];
			data.parentElement.innerHTML+='\n';
			c++;
			if(c>5)
				c=0;
		}
		if(xHidden)
			Array.prototype.forEach.call(document.getElementsByClassName("x"), function(el) {
					el.style.visibility = "hidden";			
				});
		isSorted = true;
		document.getElementById("sort").innerHTML="&#8595;";
	}
	else
	{
		location.reload(); 
	}
}
function sortArrays(arrays, comparator = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0) {
    let arrayKeys = Object.keys(arrays);
    let sortableArray = Object.values(arrays)[0];
    let indexes = Object.keys(sortableArray);
    let sortedIndexes = indexes.sort((a, b) => comparator(sortableArray[a], sortableArray[b]));

    let sortByIndexes = (array, sortedIndexes) => sortedIndexes.map(sortedIndex => array[sortedIndex]);

    if (Array.isArray(arrays)) {
        return arrayKeys.map(arrayIndex => sortByIndexes(arrays[arrayIndex], sortedIndexes));
    } else {
        let sortedArrays = {};
        arrayKeys.forEach((arrayKey) => {
            sortedArrays[arrayKey] = sortByIndexes(arrays[arrayKey], sortedIndexes);
        });
        return sortedArrays;
    }
}