// Generics : It allow you to create reusable components

	function togAndReturn(value: number | string) : number | string | boolean {
    	console.log(value) ;
    	return value;

    const numberResult	logAndReturn(42) ;
	const stringResultlogAndReturn( " Hello, Generics ! " ) ;
	const booleanResult = logAndReturn(true) ;

	console . log(numberResult) ;
	console. log(stringResult) ; 
     console. log( booleanResult) ;

     