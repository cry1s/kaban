const request = require('request-promise');
const cheerio = require('cheerio');

const parser = (url) => {
  const options = {
    uri: url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0'
    },
  }
  request(options)
  .then(function(html){
    let $ = cheerio.load(html)

    //console.log(html)
    //console.log($('.PriceInformation__price--26G', html).text())
    console.log($('item').each((i, el) => {
      console.log(el)
    }))
  })
  .catch(function(err){
    console.log('error', err.statusCode)
  })
}

const parser_currency = async (cur) => {
  cur = cur.toLowerCase()
  return new Promise((resolve, reject) => {
    let time = Date.now()
    const options = {
      uri: `https://www.finam.ru/quote/forex/usd-${cur}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0'
      },
    }
    request(options)
      .then(function (html) {
        let $ = cheerio.load(html)
        resolve([
          $('.PriceInformation__price--26G', html).text(),
          time
        ]);
      })
      .catch(function (err) {
        reject(err);
      })
  });
}


module.exports = [parser, parser_currency]