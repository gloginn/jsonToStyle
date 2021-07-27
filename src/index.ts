const textarea: HTMLTextAreaElement = document.querySelector("#myText");

const button: any = document.querySelector("#myButton");

button.addEventListener("click", () => {
  const myStyle = JSON.parse(textarea.value);
  button.style = { ...button.style, ...myStyle };
  (Object as any).assign(button.style, myStyle);
});
