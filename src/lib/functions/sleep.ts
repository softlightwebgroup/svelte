export const fnSleep: Promise<void> = (timeout: number = 1000) => new Promise((resolve) => setTimeout(resolve, timeout));
