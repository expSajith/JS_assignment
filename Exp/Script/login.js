 
 // class User which contains variable user and pass for storing username and password 
// and a method validateUser, which check login condition

function User()
{

	// This function sends the usernameand password to API and redirect to homePage,
	// if username and password matches, otherwise displays error msg

	this.validateUser=function(user,pass)
	{
		this.user=user;
		this.pass=pass;
		var httpObj=new	XMLHttpRequest();
			httpObj.onreadystatechange=function()
			{
				console.log(this.readyState);
				if(this.readyState=='4'&& this.status=='200')
				{
					var result=this.responseText;
					result=JSON.parse(result);
					console.log(result.status);
					if(result.status=='403')
					{
						alert(result.message);
					}
					else{
						console.log(result.message);
						document.location.href='home.html';
					}
				}
			}
			httpObj.open('POST','https://exptest.herokuapp.com/api/login',true);
			httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
			httpObj.send('userName='+this.user+'&password='+this.pass);
	}
}
var obj=new User();

// This functionis invoked when login button is clicked, 
// inside validae() validateUser() is invoked using an object of class User

function validate()
		{
			obj.validateUser(document.getElementById("username").value,document.getElementById("password").value);

		}