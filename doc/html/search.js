"use strict";
var items = [
{"dgamevfs.fs" : "dgamevfs/fs.html"},
{"dgamevfs.fs.FSDir" : "dgamevfs/fs/FSDir.html"},
{"dgamevfs.fs.FSDir.this" : "dgamevfs/fs/FSDir.html#this"},
{"dgamevfs.fs.FSFile" : "dgamevfs/fs/FSFile.html"},
{"dgamevfs.fs.physicalFSFile" : "dgamevfs/fs.html#physicalFSFile"},
{"dgamevfs.vfs" : "dgamevfs/vfs.html"},
{"dgamevfs.vfs.VFSDir" : "dgamevfs/vfs/VFSDir.html"},
{"dgamevfs.vfs.VFSDir.name" : "dgamevfs/vfs/VFSDir.html#name"},
{"dgamevfs.vfs.VFSDir.path" : "dgamevfs/vfs/VFSDir.html#path"},
{"dgamevfs.vfs.VFSDir.writable" : "dgamevfs/vfs/VFSDir.html#writable"},
{"dgamevfs.vfs.VFSDir.exists" : "dgamevfs/vfs/VFSDir.html#exists"},
{"dgamevfs.vfs.VFSDir.file" : "dgamevfs/vfs/VFSDir.html#file"},
{"dgamevfs.vfs.VFSDir.dir" : "dgamevfs/vfs/VFSDir.html#dir"},
{"dgamevfs.vfs.VFSDir.files" : "dgamevfs/vfs/VFSDir.html#files"},
{"dgamevfs.vfs.VFSDir.dirs" : "dgamevfs/vfs/VFSDir.html#dirs"},
{"dgamevfs.vfs.VFSDir.create" : "dgamevfs/vfs/VFSDir.html#create"},
{"dgamevfs.vfs.VFSDir.remove" : "dgamevfs/vfs/VFSDir.html#remove"},
{"dgamevfs.vfs.VFSDir.this" : "dgamevfs/vfs/VFSDir.html#this"},
{"dgamevfs.vfs.VFSDir.dirsRange" : "dgamevfs/vfs/VFSDir.html#dirsRange"},
{"dgamevfs.vfs.VFSDir.filesRange" : "dgamevfs/vfs/VFSDir.html#filesRange"},
{"dgamevfs.vfs.VFSDir.composePath" : "dgamevfs/vfs/VFSDir.html#composePath"},
{"dgamevfs.vfs.VFSDir.create_" : "dgamevfs/vfs/VFSDir.html#create_"},
{"dgamevfs.vfs.VFSDir.copyWithoutParent" : "dgamevfs/vfs/VFSDir.html#copyWithoutParent"},
{"dgamevfs.vfs.VFSDir.getCopyWithoutParent" : "dgamevfs/vfs/VFSDir.html#getCopyWithoutParent"},
{"dgamevfs.vfs.VFSRange" : "dgamevfs/vfs/VFSRange.html"},
{"dgamevfs.vfs.VFSRange.compare" : "dgamevfs/vfs/VFSRange.html#compare"},
{"dgamevfs.vfs.VFSRange.Items" : "dgamevfs/vfs/VFSRange.html#Items"},
{"dgamevfs.vfs.VFSRange.length" : "dgamevfs/vfs/VFSRange.html#length"},
{"dgamevfs.vfs.VFSRange.popFront" : "dgamevfs/vfs/VFSRange.html#popFront"},
{"dgamevfs.vfs.VFSRange.popBack" : "dgamevfs/vfs/VFSRange.html#popBack"},
{"dgamevfs.vfs.VFSDirs" : "dgamevfs/vfs.html#VFSDirs"},
{"dgamevfs.vfs.VFSFiles" : "dgamevfs/vfs.html#VFSFiles"},
{"dgamevfs.vfs.VFSFile" : "dgamevfs/vfs/VFSFile.html"},
{"dgamevfs.vfs.VFSFile.Mode" : "dgamevfs/vfs/VFSFile.Mode.html"},
{"dgamevfs.vfs.VFSFile.name" : "dgamevfs/vfs/VFSFile.html#name"},
{"dgamevfs.vfs.VFSFile.path" : "dgamevfs/vfs/VFSFile.html#path"},
{"dgamevfs.vfs.VFSFile.bytes" : "dgamevfs/vfs/VFSFile.html#bytes"},
{"dgamevfs.vfs.VFSFile.exists" : "dgamevfs/vfs/VFSFile.html#exists"},
{"dgamevfs.vfs.VFSFile.writable" : "dgamevfs/vfs/VFSFile.html#writable"},
{"dgamevfs.vfs.VFSFile.open" : "dgamevfs/vfs/VFSFile.html#open"},
{"dgamevfs.vfs.VFSFile.input" : "dgamevfs/vfs/VFSFile.html#input"},
{"dgamevfs.vfs.VFSFile.output" : "dgamevfs/vfs/VFSFile.html#output"},
{"dgamevfs.vfs.VFSFile.this" : "dgamevfs/vfs/VFSFile.html#this"},
{"dgamevfs.vfs.VFSFile.this" : "dgamevfs/vfs/VFSFile.html#this"},
{"dgamevfs.vfs.VFSFile.openRead" : "dgamevfs/vfs/VFSFile.html#openRead"},
{"dgamevfs.vfs.VFSFile.openWrite" : "dgamevfs/vfs/VFSFile.html#openWrite"},
{"dgamevfs.vfs.VFSFile.read" : "dgamevfs/vfs/VFSFile.html#read"},
{"dgamevfs.vfs.VFSFile.write" : "dgamevfs/vfs/VFSFile.html#write"},
{"dgamevfs.vfs.VFSFile.seek" : "dgamevfs/vfs/VFSFile.html#seek"},
{"dgamevfs.vfs.VFSFile.close" : "dgamevfs/vfs/VFSFile.html#close"},
{"dgamevfs.vfs.VFSFile.openReadProxy" : "dgamevfs/vfs/VFSFile.html#openReadProxy"},
{"dgamevfs.vfs.VFSFile.openWriteProxy" : "dgamevfs/vfs/VFSFile.html#openWriteProxy"},
{"dgamevfs.vfs.VFSFile.readProxy" : "dgamevfs/vfs/VFSFile.html#readProxy"},
{"dgamevfs.vfs.VFSFile.writeProxy" : "dgamevfs/vfs/VFSFile.html#writeProxy"},
{"dgamevfs.vfs.VFSFile.seekProxy" : "dgamevfs/vfs/VFSFile.html#seekProxy"},
{"dgamevfs.vfs.VFSFile.closeProxy" : "dgamevfs/vfs/VFSFile.html#closeProxy"},
{"dgamevfs.vfs.Seek" : "dgamevfs/vfs/Seek.html"},
{"dgamevfs.vfs.VFSFileInput" : "dgamevfs/vfs/VFSFileInput.html"},
{"dgamevfs.vfs.VFSFileInput.read" : "dgamevfs/vfs/VFSFileInput.html#read"},
{"dgamevfs.vfs.VFSFileInput.seek" : "dgamevfs/vfs/VFSFileInput.html#seek"},
{"dgamevfs.vfs.VFSFileOutput" : "dgamevfs/vfs/VFSFileOutput.html"},
{"dgamevfs.vfs.VFSFileOutput.write" : "dgamevfs/vfs/VFSFileOutput.html#write"},
{"dgamevfs.vfs.VFSFileOutput.seek" : "dgamevfs/vfs/VFSFileOutput.html#seek"},
{"dgamevfs.exceptions" : "dgamevfs/exceptions.html"},
{"dgamevfs.exceptions.VFSException" : "dgamevfs/exceptions/VFSException.html"},
{"dgamevfs.exceptions.VFSNotFoundException" : "dgamevfs/exceptions/VFSNotFoundException.html"},
{"dgamevfs.exceptions.VFSInvalidPathException" : "dgamevfs/exceptions/VFSInvalidPathException.html"},
{"dgamevfs.exceptions.VFSIOException" : "dgamevfs/exceptions/VFSIOException.html"},
{"dgamevfs.exceptions.VFSMountException" : "dgamevfs/exceptions/VFSMountException.html"},
{"dgamevfs._" : "dgamevfs/_.html"},
{"dgamevfs.stack" : "dgamevfs/stack.html"},
{"dgamevfs.stack.StackDir" : "dgamevfs/stack/StackDir.html"},
{"dgamevfs.stack.StackDir.this" : "dgamevfs/stack/StackDir.html#this"},
{"dgamevfs.stack.StackDir.mount" : "dgamevfs/stack/StackDir.html#mount"},
{"dgamevfs.stack.StackDir.this" : "dgamevfs/stack/StackDir.html#this"},
{"dgamevfs.stack.StackFile" : "dgamevfs/stack/StackFile.html"},
{"dgamevfs.stack.StackFile.stack_" : "dgamevfs/stack/StackFile.html#stack_"},
{"dgamevfs.stack.StackFile.openFile_" : "dgamevfs/stack/StackFile.html#openFile_"},
{"dgamevfs.stack.StackFile.this" : "dgamevfs/stack/StackFile.html#this"},
];
function search(str) {
	var re = new RegExp(str.toLowerCase());
	var ret = {};
	for (var i = 0; i < items.length; i++) {
		var k = Object.keys(items[i])[0];
		if (re.test(k.toLowerCase()))
			ret[k] = items[i][k];
	}
	return ret;
}

function searchSubmit(value, event) {
	console.log("searchSubmit");
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	if (value === "" || event.keyCode == 27) {
		resultTable.style.display = "none";
		return;
	}
	resultTable.style.display = "block";
	var results = search(value);
	var keys = Object.keys(results);
	if (keys.length === 0) {
		var row = resultTable.insertRow();
		var td = document.createElement("td");
		var node = document.createTextNode("No results");
		td.appendChild(node);
		row.appendChild(td);
		return;
	}
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var v = results[keys[i]];
		var link = document.createElement("a");
		link.href = v;
		link.textContent = k;
		link.attributes.id = "link" + i;
		var row = resultTable.insertRow();
		row.appendChild(link);
	}
}

function hideSearchResults(event) {
	if (event.keyCode != 27)
		return;
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	resultTable.style.display = "none";
}

