const css = `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');`;

function injectStyles() {
  if (!window._pixelifyStyles) {
    window._pixelifyStyles = true;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(css);
  }
}

function pixelify(image) {
  image.style.opacity = "0";
  image.crossOrigin = "anonymous";

  image.addEventListener("load", () => {
    const width = image.offsetWidth / 3;
    const height = image.offsetHeight / 3;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const canvas2d = canvas.getContext("2d");
    canvas2d.imageSmoothingEnabled = false;
    canvas2d.drawImage(image, 0, 0, width, height);

    const imageData = canvas2d.getImageData(0, 0, width, height);
    const pixels = imageData.data;

    const outContainer = document.createElement("div");

    outContainer.className = image.className;
    outContainer.style.width = `${image.offsetWidth}px`;
    outContainer.style.height = `${image.offsetHeight}px`;
    outContainer.style.overflow = "hidden";

    const out = document.createElement("p");
    outContainer.appendChild(out);

    out.style.fontFamily = `"JetBrains Mono"`;
    out.style.lineHeight = "4.81px";
    out.style.fontSize = "9px";
    out.style.letterSpacing = "-2.8px";
    out.style.transform = "scale(1.1583710407, 0.6254071661)";
    out.style.transformOrigin = "top left";
    out.style.marginTop = "-1px";
    out.style.width = `${image.offsetWidth / 1.1583710407}px`;
    out.style.height = `${image.offsetHeight / 0.6254071661}px`;

    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width; x++) {
        const baseIndex = (y * imageData.width + x) * 4;

        const r = pixels[baseIndex + 0];
        const g = pixels[baseIndex + 1];
        const b = pixels[baseIndex + 2];
        const a = pixels[baseIndex + 3];

        const span = document.createElement("span");
        span.style.color = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
        span.innerText = "■";

        out.appendChild(span);
      }

      out.appendChild(document.createElement("br"));
    }

    image.parentNode.replaceChild(outContainer, image);
  });
}

function makeHeavy() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach(pixelify);
}

makeHeavy();
