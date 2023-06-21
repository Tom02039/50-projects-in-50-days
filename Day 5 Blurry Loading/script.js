const loadingSpeed = 20;

function increaseNumber() {
  const loadingNumber = document.querySelector(".loading-number");
  endNumber = 100;
  increaseNumberRecursive(0, 100, loadingNumber);
}

function increaseNumberRecursive(startNumber, endNumber, element) {
  if (startNumber <= endNumber) {
    element.innerHTML = startNumber;
    setTimeout(() => {
      increaseNumberRecursive(startNumber + 1, endNumber, element);
    }, loadingSpeed);
  }
}

increaseNumber();
