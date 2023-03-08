# CarCar

Team:

* Kyle - Sales
* Jake Hannahan - Service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
Models:
    AutomobileVO: created by polling the automobile model in the inventory microservice to get an import_href value and vin number.

    SalesPerson: creats a sales person instance with the sale person's name and unique employee number

    Customer: creates a customer instance with name, address, and phone_number

    SaleRecord: creates a sale record instance that is foreign keys with the AutomobileVO, SalesPerson, and Customer models. Each of these models can have multiple instances of sale records. Instance also has a price property that is a decimal field.
