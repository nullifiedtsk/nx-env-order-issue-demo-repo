const val = process.env['AAA_VARIABLE_NAME']?.toString().trim();

const valIsSet = !!val && !!val.toString().trim();

if (valIsSet) {
  console.log(
    `🚀 Today is the day of ${val}! Congrats, ${val}!`
  );
} else {
  console.log(
    `😞 Whoa, today is just today. Such disappointed 🐶`
  );
}
