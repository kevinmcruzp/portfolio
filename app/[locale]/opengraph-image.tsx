import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kevin Pizarro — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const roles = {
  pt: "Engenheiro de Software",
  es: "Ingeniero de Software",
  en: "Software Engineer",
} as const;

const focuses = {
  pt: "Frontend · Segurança",
  es: "Frontend · Seguridad",
  en: "Frontend · Security",
} as const;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const role = roles[locale as keyof typeof roles] ?? roles.pt;
  const focus = focuses[locale as keyof typeof focuses] ?? focuses.pt;

  // Fetch Cinzel font
  const cinzelFont = await fetch(
    "https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnTYrvDE5ZdqU.woff2"
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#0c0c10",
          position: "relative",
          fontFamily: "Cinzel, serif",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,83,9,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,180,131,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Outer border */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(212,180,131,0.15)",
            display: "flex",
          }}
        />

        {/* Corner accents — top-left */}
        <div style={{ position: "absolute", top: "24px", left: "24px", display: "flex" }}>
          <div style={{ width: "40px", height: "2px", background: "#d4b483", display: "flex" }} />
        </div>
        <div style={{ position: "absolute", top: "24px", left: "24px", display: "flex" }}>
          <div style={{ width: "2px", height: "40px", background: "#d4b483", display: "flex" }} />
        </div>

        {/* Corner accents — top-right */}
        <div style={{ position: "absolute", top: "24px", right: "24px", display: "flex" }}>
          <div style={{ width: "40px", height: "2px", background: "#d4b483", display: "flex" }} />
        </div>
        <div style={{ position: "absolute", top: "24px", right: "24px", display: "flex" }}>
          <div style={{ width: "2px", height: "40px", background: "#d4b483", display: "flex" }} />
        </div>

        {/* Corner accents — bottom-left */}
        <div style={{ position: "absolute", bottom: "24px", left: "24px", display: "flex" }}>
          <div style={{ width: "40px", height: "2px", background: "#d4b483", display: "flex" }} />
        </div>
        <div style={{ position: "absolute", bottom: "24px", left: "24px", display: "flex" }}>
          <div style={{ width: "2px", height: "40px", background: "#d4b483", display: "flex" }} />
        </div>

        {/* Corner accents — bottom-right */}
        <div style={{ position: "absolute", bottom: "24px", right: "24px", display: "flex" }}>
          <div style={{ width: "40px", height: "2px", background: "#d4b483", display: "flex" }} />
        </div>
        <div style={{ position: "absolute", bottom: "26px", right: "24px", display: "flex" }}>
          <div style={{ width: "2px", height: "40px", background: "#d4b483", display: "flex" }} />
        </div>

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(180,83,9,0.5)",
                padding: "6px 16px",
                color: "#b45309",
                fontSize: "13px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              {role}
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "100px",
              fontWeight: 700,
              color: "#d4b483",
              lineHeight: 1,
              letterSpacing: "0.05em",
              display: "flex",
              flexDirection: "column",
              marginBottom: "28px",
            }}
          >
            <span style={{ display: "flex" }}>KEVIN</span>
            <span style={{ display: "flex" }}>PIZARRO</span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "rgba(180,83,9,0.6)",
              marginBottom: "28px",
              display: "flex",
            }}
          />

          {/* Meta info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "rgba(232,224,208,0.45)",
              fontSize: "16px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex" }}>Londrina, BR</span>
            <span style={{ display: "flex", color: "rgba(180,83,9,0.5)" }}>·</span>
            <span style={{ display: "flex" }}>Aceno Tecnologia</span>
            <span style={{ display: "flex", color: "rgba(180,83,9,0.5)" }}>·</span>
            <span style={{ display: "flex" }}>{focus}</span>
          </div>
        </div>

        {/* Right decorative vertical line */}
        <div
          style={{
            position: "absolute",
            right: "340px",
            top: "80px",
            bottom: "80px",
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, rgba(212,180,131,0.2), transparent)",
            display: "flex",
          }}
        />

        {/* Right side: large KP monogram */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "180px",
            fontWeight: 700,
            color: "rgba(212,180,131,0.04)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            display: "flex",
            userSelect: "none",
          }}
        >
          KP
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cinzel",
          data: cinzelFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
