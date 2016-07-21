var http = require('http');
var cheerio = require('cheerio');
var request = require('sync-request');
var fs = require('fs');
var google = require('google')


google.resultsPerPage = 1

var keywords = "nodejs testing"
if (process.argv[2]){
    keywords = process.argv[2]
}

google(keywords + ' site:stackoverflow.com', function (err, res){
  if (err) console.error(err)

  
    var url = res.links[0].href

    var res = request('GET', url);
    var body = res.getBody()
    $ = cheerio.load(body);

    var output = "";
    $(".answer").first().find(".post-text").find("code").each(function(){
        
        //the code element should be the only one in the paragraph
        if (!$(this).parent().is("pre")){
            return;
        }
        if (output != ""){
            output += "\n--\n"
        }
        output += $(this).text()
    })
    console.log(output)

})





