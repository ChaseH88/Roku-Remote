declare global {
  interface Window {
    rokuBaseURL: string
  }
}

export const defaultModalOpen = () => !window?.rokuBaseURL;