import Helpers from "../helpers/Helpers";

const baseUrl = "http://localhost:3002";

class EventsService {
  /**
   * Liste des events
   *
   * @param rows
   * @returns {Promise<*>}
   */
  static async list(rows = 20) {
    let init = { method: "GET" };
    let call = await fetch(`${baseUrl}&rows=${rows}`, init);
    let response = await call.json();
    return response.records;
  }
  static async helo() {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let call = await fetch(`${baseUrl}/helloWorld`, init);
    return call;
  }

  static async getEventsThisWeek(rows = 20) {
    let init = { method: "GET" };

    let q = `date_start>=${Helpers.getActualDate()} AND date_end<=${Helpers.getEndOfWeek()}`;
    let sort = "date_start";

    let call = await fetch(
      `${baseUrl}&rows=${rows}&q=${q}&sort=-${sort}`,
      init
    );
    let response = await call.json();
    return response.records;
  }

  static async getEventsAfter(rows = 20) {
    let init = { method: "GET" };

    let q = `date_start > ${Helpers.getEndOfWeek()}`;
    let sort = "date_start";

    let call = await fetch(
      `${baseUrl}&rows=${rows}&q=${q}&sort=-${sort}`,
      init
    );
    let response = await call.json();
    return response.records;
  }

  static async getEventsByName(rows, title) {
    let init = { method: "GET" };

    let q = `title=${title} AND date_start >= ${Helpers.getActualDate()}`;
    let sort = "date_start";

    let call = await fetch(
      `${baseUrl}&rows=${rows}&q=${q}&sort=-${sort}`,
      init
    );
    let response = await call.json();
    return response.records;
  }
}

export default EventsService;
