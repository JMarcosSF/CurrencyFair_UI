Client-side for CurrencyFairWizard Demo

*Please see readme from project "CurrencyFairWizard"

-----SUBMISSION NOTES-----
Transaction Message Endpoint POST: 
	http://skybabble.com:8080/proxy/message

examle cURL:

curl -H "Content-Type: application/json" -d '{"userId":"212121","currencyFrom":"EUR","currencyTo":"GBP","amountSell":1000,"amountBuy":747.1,"rate":0.7471,"timePlaced":"24-JAN-15 10:27:44","originatingCountry":"FR"}' http://skybabble.com:8080/proxy/message

Front End URL:
	http://skybabble.com/angular.example/CurrencyFair_UI/#/

Public GitHub Repo (2 projects):
	Server-Side:
		https://github.com/JMarcosSF/CurrencyFairWizard.git
	Client-Side:
		https://github.com/JMarcosSF/CurrencyFair_UI.git
