// src/api/data.ts
export const loadData = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Simulasi pemuatan data selama 3 detik
  });
};
