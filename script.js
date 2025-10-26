let quotes=[];
async function generateQuote(){
  const quoteElement=document.getElementById('quote');
  try{
    //Fetch quote from quotable api
    if(quotes.length==0){
  const response=await fetch('https://type.fit/api/quotes');
    if(!response.ok){
      throw new Error('Failed to fetch quote');
    }
    quotes=await response.json();
    }
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const quote=quotes[randomIndex];
    quoteElement.innerText=`${quote.text}\n- ${quote.author}`;
  }
  catch(error){
    quoteElement.innerText="Could not fecth quote";
    console.error(error);
  }}
