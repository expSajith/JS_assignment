function Home()
{
	// method to load Images from the API, method is invoked when the page is start loading

	this.loadContent=function()
	{
		var httpObj=new	XMLHttpRequest();
		httpObj.onreadystatechange=function()
		{
			if(this.readyState=='4'&& this.status=='200')
			{
				var result=this.responseText;
				result=JSON.parse(result);
				result.data.forEach(function(element){  
				image="<div class='img'><img src='"+
				element.imageUrl+"'>"+"<p>"+element.caption+"</p></div>";
				document.getElementById("body").innerHTML+=image; });
			}
		}
		httpObj.open('GET','https://exptest.herokuapp.com/api/imageGallery',true);
		httpObj.send();
	}
}
var obj=new Home();
function load()
{
	obj.loadContent();
}

// This function is invoked when logout button is clicked

function logout()
{
	if(confirm("Click ok for logout"))
	{
		document.location.href='index.html';
	}
	
}

