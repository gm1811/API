const getSessionID = async (url) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {"Content-type": "multipart/form-data"},
    })
    if (res.ok) { 
      const data = await res.json();
      const sessionID = data.session_id;
      return sessionID;
    }
    console.error("HTTP-Error: " + res.status);
  }


  const autocaptureDiv = document.querySelector('.autocapture-div');
  const autocaptureURL = 'localhost:3000/api/autocapture';
  const codereaderURL = 'localhost:3000/api/codereader';
  

const docForm = document.getElementById('doc-form');

 docForm.addEventListener("submit", (e) => {
 
    console.log( getSessionID(autocaptureURL) )

    let selectedDoc = document.querySelector('#doc-select').value;
    
    console.log( selectedDoc ) 


    autocapture(autocaptureDiv, {
      locale: "es",
      session_id: getSessionID(autocaptureURL),
      document_type: selectedDoc,
      document_side: "front",
      callback: function(captured_token1, image1){
        ct1 = captured_token1;
        img1 = image1;
        sd = selectedDoc;
        fetch(codereaderURL, {
          method: 'POST',
          body: JSON.stringify({token: ct1, docType:sd})
        }) 
      },
      failure: function(error){ alert(error); e.preventDefault();} }
    )})
