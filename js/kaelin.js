function test() {

setTimeout(function () {
 $("#imageone").css("visibility","hidden");
	setTimeout(function () {
	 $("#imagetwo").css("visibility","hidden");
			setTimeout(function () {
			 $("#imagethree").css("visibility","hidden");
				setTimeout(function () {
				$("#imagefour").css("visibility","hidden");
					setTimeout(function () {
						$("#imageone").css("visibility","visible");
						$("#imagetwo").css("visibility","visible");
						$("#imagethree").css("visibility","visible");
						$("#imagefour").css("visibility","visible");
					}   	  
					,1 );
				}   	  
				,500 );
			 }   	  
			,500 );
		}   	  
	,500 );
	 }   	  
,500 ); //End setTimeoutfunction



		
}