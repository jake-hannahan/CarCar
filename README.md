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
        Fields:
            -import_href: a unique charfield
            -vin: a unique charfield

    Customer:
        Fields :
            -name: charfield with null false (must have customer name)
            -address: charfield with null false (must have address)
            -phone_number: charfield with null false (must have phone number)

    Sales Person:
        Fields:
            -name: charfield with null false (must have sales person name)
            -employee_number: charfield with null false and unique true (multiple sales persons cannot have the same employee number. must have a sales person employee number)

    SaleRecord: creates a sale record instance that is foreign keys with the AutomobileVO, SalesPerson, and Customer models.
        Fields:
            -automobile: references the automobileVO. On delete is protect so an automobile cannot be deleted if it has a linked sales record
            -sales_person: references the sales person model. On delete is protect so an sales person cannot be deleted if it has a linked sales record
            -customer: references the customer model. On delete is protect so an customer cannot be deleted if it has a linked sales record
            -price: decimal field with a max_digits of 15 and decimal_places set to 2 (2 decimal places for prices). Null set to false (cannot create a sales record without completing the sale and having a price)
