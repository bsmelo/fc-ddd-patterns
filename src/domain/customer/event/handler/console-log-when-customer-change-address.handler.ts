import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";

export default class ConsoleLogWhenCustomerChangeAddressHandler
  implements EventHandlerInterface<CustomerChangeAddressEvent> {

  handle(event: CustomerChangeAddressEvent): void {
    console.log(`Endereço do cliente: {${event.eventData.id}, ${event.eventData.name}} alterado para: {${event.eventData.address}}`);
  }

}
