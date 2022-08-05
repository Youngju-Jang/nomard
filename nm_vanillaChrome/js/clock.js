const clock = document.querySelector("h2#clock");

const getClock = () => {
  const date = new Date();
  const setPad = (num) => String(num).padStart(2, "0");

  clock.innerText = `${setPad(date.getHours())} : ${setPad(
    date.getMinutes()
  )} : ${setPad(date.getSeconds())}`;
};

getClock();
setInterval(getClock, 1000);
