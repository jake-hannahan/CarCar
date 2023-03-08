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

Explain your models and integration with the inventory
microservice, here.
