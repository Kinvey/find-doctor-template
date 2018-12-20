function onPreFetch(request, response, modules) {

  var query = JSON.parse(request.params.query);

    
  modules.logger.info(query);
  
  // some basic input validation
  if (query.service_id===undefined) {
    response.body = {error:"must query on 'service_id'"};
    return response.complete(500);
  }
  
  var entity1 = modules.kinvey.entity({
  label: "Hospital A", 
  price_low: 200, price_avg: 250, price_high: 300,
  breakdown:"Your deductible is not met, your out of pocket cost is your remaining individual deductible, $250"});
  
  var entity2 = modules.kinvey.entity({
  label: "Hospital B, out-patient", 
  price_low: 600, price_avg: 750, price_high: 800,
  breakdown:"Your out of pocket cost is your remaining individual deductible, $483.57 plus coinsurance of 10% over the remaining $5016.43"});
  
  var entity3 = modules.kinvey.entity({
  label: "Hospital B, in-patient", 
  price_low: 1000, price_avg: 1250, price_high: 2000,
  breakdown:"Your individual deductible is not met, your out of pocket cost is the cost of the service, $1250" });
  
  response.body = [entity1, entity2, entity3];  
  response.complete();
}
