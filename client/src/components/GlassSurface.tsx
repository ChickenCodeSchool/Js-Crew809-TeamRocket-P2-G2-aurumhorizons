import type { CSSProperties, FC, ReactNode } from "react";
import "./GlassSurface.css";

interface GlassSurfaceProps {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  opacity?: number;
  style?: CSSProperties;
  className?: string;
}

const GlassSurface: FC<GlassSurfaceProps> = ({
  children,
  width = "100%",
  height = 80,
  borderRadius = 0,
  opacity = 0.05,
  style = {},
  className = "",
}) => {
  const glassStyle: CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: "0 2rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    ...style,
  };

  return (
    <div className={`glass-surface ${className}`} style={glassStyle}>
      {children}
    </div>
  );
};

export default GlassSurface;
