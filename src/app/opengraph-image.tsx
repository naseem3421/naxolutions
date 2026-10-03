import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Naxolutions | Business Conversion Consultancy';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0F1012',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Emblem: 3 ascending bars with growth arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '6px',
              height: '48px',
              padding: '8px 12px',
              backgroundColor: '#1A1C20',
              borderRadius: '10px',
              border: '1px solid #2A2D34',
            }}
          >
            <div style={{ width: '10px', height: '22px', backgroundColor: '#FFFFFF', borderRadius: '2px' }} />
            <div style={{ width: '10px', height: '14px', backgroundColor: '#FFFFFF', borderRadius: '2px' }} />
            <div style={{ width: '10px', height: '32px', backgroundColor: '#FFFFFF', borderRadius: '2px' }} />
            <div style={{ display: 'flex', alignItems: 'center', color: '#C84B27', fontSize: '22px', fontWeight: 900, marginLeft: '2px' }}>↗</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              NAXOLUTIONS
            </span>
            <span
              style={{
                fontSize: '11px',
                color: '#C84B27',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 600,
                marginTop: '6px',
              }}
            >
              BUILD • GROW • SCALE
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Your business may not have a lead problem.
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#C84B27',
              fontStyle: 'italic',
            }}
          >
            It may have a conversion problem.
          </div>
        </div>

        <div
          style={{
            fontSize: '16px',
            color: '#737887',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          ATTENTION → ENQUIRY → CONVERSATION → DECISION → REVENUE
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
