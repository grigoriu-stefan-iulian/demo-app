/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
export const pasuser = () => {
  const email = document.getElementById("emailInput");
  const password = document.getElementById("passwordInput");
  if (email.value == "JavaScript") {
    if (password.value == "Kit") {
      alert("Thankyou. Valid data!");
    } else alert("Invalid Password");
  } else alert("Invalid UserID");
};
