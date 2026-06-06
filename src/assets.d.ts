declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.asset.json" {
  const value: {
    url: string;
    version?: number;
    asset_id?: string;
    project_id?: string;
    r2_key?: string;
    original_filename?: string;
    size?: number;
    content_type?: string;
    created_at?: string;
  };
  export default value;
}
