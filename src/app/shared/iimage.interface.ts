export default interface IImage {
  url: string | null;
  href?: string;
  clickAction?: () => void;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}
