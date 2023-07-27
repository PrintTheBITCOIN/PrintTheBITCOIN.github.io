$(document).ready(function() {
    // Define the Coingecko API endpoint and the coin's ID (based on its address)
    var PFourUrl = "https://api.coingecko.com/api/v2/coins/ethereum/contract/0xEC0C6f7404c68a2f4643f699099BCbe115503a64";
    var FourUrl = "https://api.coingecko.com/api/v2/coins/ethereum/contract/0x244b797d622D4DEe8b188b03546ACAAbD0Cf91A0";
    // Note: replace "ethereum" with the blockchain type if PP is not an Ethereum-based token

    // Make a request to the API and update the price and market cap data on the webpage
    $.get(PFourUrl, function(data) {
        var price = data.market_data.current_price.usd;
        var supply = 444444444;
        var marketCap = price * supply;

        $("#ptfprice").text("PTF Price: " + price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 8 }));
        $("#ptfmarketcap").text("PTF Marketcap: $" + marketCap.toLocaleString("en-US", { maximumFractionDigits: 0 }));
        
    $.get(FourUrl, function(data) {
        var price = data.market_data.current_price.usd;
        var supply = 444000000000;
        var marketCap = price * supply;

        $("#fourprice").text("Pepe Price: " + price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 8 }));
        $("#fourmarketcap").text("Four Marketcap: $" + marketCap.toLocaleString("en-US", { maximumFractionDigits: 0 }));
    });
});
});
