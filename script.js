async function generateQuote(){
  const quoteElement=document.getElementById('quote');
  try{
    //Fetch quote from quotable api
  const response=await fetch('https://api.quotable.io/random');
    if(!response.ok){
      throw new Error('Failed to fetch quote');
    }
    const data=await response.json();
    quoteElement.innerText=`${data.content}\n- ${data.author}`;
  }
  catch(error){
    quoteElement.innerText="Could not fecth quote";
    console.error(error);
  }}
