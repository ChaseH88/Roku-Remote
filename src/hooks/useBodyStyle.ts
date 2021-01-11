const useBodyStyle = (style: string, value: string): void => {
  document.body.style[style as any] = value;
}

export { useBodyStyle };