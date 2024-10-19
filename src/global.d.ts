// global.d.ts
declare module '@metamask/logo' {
    interface ModelViewerOptions {
      pxNotRatio?: boolean;
      width?: number;
      height?: number;
      followMouse?: boolean;
      slowDrift?: boolean;
    }
  
    interface ModelViewerInstance {
      container: HTMLElement;
      lookAt: (options: { x: number; y: number }) => void;
      setFollowMouse: (follow: boolean) => void;
      stopAnimation: () => void;
    }
  
    export default function ModelViewer(options: ModelViewerOptions): ModelViewerInstance;
  }
  