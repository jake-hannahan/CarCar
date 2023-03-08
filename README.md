# CarCar

Team:

* Kyle - Sales
* Jake Hannahan - Service

## Design

## Service microservice

Models
 - AutomobileVO
    - poller.py gets a response from the inventory microservice automobiles and uses update_or_create to make AutomobileVOs.
    - Fields
        - import_href: CharField and unique.
        - vin: CharField and unique.
 - Technician
    - Fields
        - name: CharField.
        - employee_number: CharField.
        - id: utilized get_api_id and reverse to get a technician id.
 - ServiceAppointment
    - Fields
        - vin: CharField.
        - customer_name: CharField.
        - date: DateTimeField.
        - technician: ForeignKey to Technician, on_delete.models.PROTECT so technicians don't get deleted when an appointment is cancelled.
        - reason: CharField.
        - vip: BooleanField, default=False. When a POST request is made to create a service appointment, will check if the vin matches any vin of the AutomobileVOs and will set vip to True if there is a match.
        - completed: BooleanField, default=False. Will be changed to True when a service appointment is completed.
        - id: utilized get_api_id and reverse to get a appointment id.

## Sales microservice
Models:
    AutomobileVO: created by polling the automobile model in the inventory microservice to get an import_href value and vin number.

    SalesPerson: creats a sales person instance with the sale person's name and unique employee number

    Customer: creates a customer instance with name, address, and phone_number

    SaleRecord: creates a sale record instance that is foreign keys with the AutomobileVO, SalesPerson, and Customer models. Each of these models can have multiple instances of sale records. Instance also has a price property that is a decimal field.
