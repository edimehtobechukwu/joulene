import svgDesktop from "../../imports/svg-1oppexb52i";
import svgMobile from "../../imports/svg-wkn9l03mm2";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof svgDesktop | keyof typeof svgMobile;
  viewBox?: string;
  className?: string;
}

export const SvgIcon = ({ name, viewBox = "0 0 120 120", className, ...props }: IconProps) => {
  // Try to find the path in desktop or mobile (they might share keys or have unique ones)
  const pathData = (svgDesktop as any)[name] || (svgMobile as any)[name];

  if (!pathData) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return (
    <svg viewBox={viewBox} className={className} fill="currentColor" {...props}>
      <path d={pathData} />
    </svg>
  );
};

// Export raw paths if needed for composition
export const desktopPaths = svgDesktop;
export const mobilePaths = svgMobile;
