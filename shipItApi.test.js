"use strict";
const AxiosMockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdapter(axios);
const { shipProduct } = require("./shipItApi");
const SHIPIT_SHIP_URL = "http://localhost:3001/ship";

test("shipProduct", async function () {
  axiosMock.onPost(SHIPIT_SHIP_URL).reply(200, {
    receipt: {
      itemId: 1000,
      name: "Test Tester",
      addr: "100 Test St",
      zip: "12345-6789",
      shipId: 5052,
    },
  });
  const shipId = await shipProduct(
    1000,
    "Test Tester",
    "100 Test St",
    "12345-6789"
  );

  expect(shipId).toEqual(5052);
});
