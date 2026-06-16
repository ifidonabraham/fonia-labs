import { ImageResponse } from "next/og";

export const alt = "Fonia Labs — Where Ideas Become Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b1120",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute", top: -120, left: -80,
            width: 600, height: 600, borderRadius: 999,
            background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)",
            display: "flex"
          }}
        />
        <div
          style={{
            position: "absolute", bottom: -100, right: -60,
            width: 500, height: 500, borderRadius: 999,
            background: "radial-gradient(circle, rgba(56,189,248,0.16) 0%, transparent 70%)",
            display: "flex"
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* O-Core mark */}
          <div
            style={{
              width: 72, height: 72, borderRadius: 999,
              border: "5px solid rgba(148,163,184,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "radial-gradient(circle at 42% 38%, rgba(56,189,248,0.3), transparent 68%)",
              position: "relative"
            }}
          >
            <div
              style={{
                width: 48, height: 48, borderRadius: 999,
                border: "3.5px solid rgba(148,163,184,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: 26, height: 26, borderRadius: 999,
                  background: "radial-gradient(circle at 38% 32%, #93c5fd, #1d4ed8)"
                }}
              />
            </div>
          </div>

          {/* Wordmark */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
              <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: -2, color: "#f8fafc" }}>Fon</span>
              <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: -2, color: "#38bdf8" }}>ia</span>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginTop: -6,
              fontSize: 14, fontWeight: 700, letterSpacing: 7, color: "#6b7280"
            }}>
              <div style={{ width: 28, height: 1, background: "#38bdf8", display: "flex" }} />
              LABS
              <div style={{ width: 28, height: 1, background: "#38bdf8", display: "flex" }} />
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{
            fontSize: 88, fontWeight: 700, letterSpacing: -4, lineHeight: 1.0,
            color: "#f8fafc"
          }}>
            Where Ideas
          </div>
          <div style={{
            fontSize: 88, fontWeight: 700, letterSpacing: -4, lineHeight: 1.0,
            color: "#38bdf8"
          }}>
            Become Companies.
          </div>
          <div style={{
            fontSize: 26, fontWeight: 500, color: "#94a3b8", marginTop: 28,
            letterSpacing: 0
          }}>
            A global innovation group building companies, platforms, and products that solve real-world problems.
          </div>
        </div>

        {/* Footer row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div style={{
            fontSize: 18, fontWeight: 600, color: "#475569", letterSpacing: 0.5
          }}>
            fonia-labs.vercel.app
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 20px",
            background: "rgba(37,99,235,0.15)",
            border: "1px solid rgba(37,99,235,0.4)",
            borderRadius: 999,
            fontSize: 16, fontWeight: 600, color: "#93c5fd"
          }}>
            Founded by Ifidon Abraham
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
