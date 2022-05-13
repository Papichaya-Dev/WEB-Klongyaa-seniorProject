// folder types สำหรับ declare file ให้ typescript
declare module '*.png' {
    const src: string;
    export default src;
  }
  declare module "*.less" {
    const styles: any;
    export default styles;
  }