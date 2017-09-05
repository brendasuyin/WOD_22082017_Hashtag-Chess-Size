var hashtag = "#"
var lines = 9

for (i=0; i<9; i++){


	for (j=0; j<9; j++){
		
		if ((i + j) % 2 == 0)
		{document.write(hashtag);}

		else 		
		{document.write(" ");}
	}
	
	document.write("<br/>");

}