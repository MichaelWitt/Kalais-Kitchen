// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Michael",
    customerEmail: "Michael@zmail.com",
    customerID: "CaptainZ",
    phoneNumber: "000-000-0001"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
