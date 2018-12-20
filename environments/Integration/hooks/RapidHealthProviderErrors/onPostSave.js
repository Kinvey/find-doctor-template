function onPostSave(request, response, modules) {  
  var collectionAccess = modules.collectionAccess;
   var i, to, logger = modules.logger, email = modules.email;
var emailSubject, emailBody ="";
  //logger.info(request.body.status);
  if(request.body.status === "updated") {
    collectionAccess.collection('EmailConfiguration')
                    .find({Type: 'DataErrorReporting'}, function (err, docs)
    {
        if (err) {
            logger.error('Query failed: '+ err);
            response.body.debug = err;
            response.complete(500);
          } else {
            resultA = docs;
            emailSubject = docs[0].Subject;
        		//logger.info(docs[0].Subject);
           
          }
      to = docs[0].ToEmail;
      logger.info("Sending e-mail to: " + to);
      if(request.body.prefix != undefined) {
        emailBody = '<html> Hello Admin,</br> </br> An error has been reported for physician <b>' + request.body.prefix + ' ' + 					request.body.first_name + ' ' + request.body.last_name + '</b>. </br></br> Thank You </html>';
      } else {
        emailBody = '<html> Hello Admin,</br> </br> An error has been reported for physician <b>' + request.body.first_name + ' ' + 					request.body.last_name + '</b>. </br></br> Thank You </html>';
      }
      
         email.send(request.body.useremail,
                   to,
                   emailSubject,
                   '',
                   null,
                   emailBody);
    response.continue();
    });
     
  }
}