declare global {
  interface Window {
    Waypoint: new (options: {
      element: Element;
      handler: (direction: string) => void;
      offset?: string | number;
    }) => {
      destroy: () => void;
    };
  }
}

export {};
