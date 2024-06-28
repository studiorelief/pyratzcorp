export function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

export function videoLoop() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const videoElement = document.getElementById('videoLoop') as HTMLMediaElement;
      videoElement.play();
    }
  });
}
