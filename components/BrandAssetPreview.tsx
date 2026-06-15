type Props = {
  src: string;
  name: string;
  fileLabel: string;
  surface?: "dark" | "light";
};

/**
 * BrandAssetPreview — renders a downloadable brand asset on the correct
 * surface with its file name, used in the brand kit.
 */
export function BrandAssetPreview({ src, name, fileLabel, surface = "dark" }: Props) {
  return (
    <div className="asset-card">
      <div className={`asset-frame asset-frame--${surface}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${name} preview`} loading="lazy" />
      </div>
      <div className="asset-meta">
        <div>
          <p className="asset-name">{name}</p>
          <p className="asset-file">{fileLabel}</p>
        </div>
        <a className="btn" href={src} download>
          Download
        </a>
      </div>
    </div>
  );
}
