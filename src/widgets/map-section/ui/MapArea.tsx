// MapArea.tsx
// bun add leaflet react-leaflet @types/leaflet
// main.tsx га қўш: import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

// Leaflet маркер иконкасини тузатиш (стандарт фикс)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

// Донорлар нуқталари — бу маълумотларни API дан олишинг мумкин
const DONOR_POINTS = [
  { id: 1, name: 'Toshkent shahri',    lat: 41.2995, lng: 69.2401, count: 124, color: '#00FF7F' },
  { id: 2, name: 'Samarqand',          lat: 39.6542, lng: 66.9597, count: 87,  color: '#3B82F6' },
  { id: 3, name: 'Buxoro',             lat: 39.7681, lng: 64.4556, count: 56,  color: '#8B5CF6' },
  { id: 4, name: 'Namangan',           lat: 41.0011, lng: 71.6722, count: 73,  color: '#00FF7F' },
  { id: 5, name: 'Andijon',            lat: 40.7821, lng: 72.3442, count: 91,  color: '#3B82F6' },
  { id: 6, name: "Farg'ona",           lat: 40.3864, lng: 71.7864, count: 68,  color: '#00FF7F' },
  { id: 7, name: 'Qarshi',             lat: 38.8600, lng: 65.7911, count: 42,  color: '#8B5CF6' },
  { id: 8, name: 'Nukus',              lat: 42.4600, lng: 59.6100, count: 31,  color: '#3B82F6' },
]

// Ҳар бир шаҳар учун кастом рангли маркер
const createColorMarker = (color: string) =>
  L.divIcon({
    className: '',
    html: `
      <div style="
        width: 14px; height: 14px;
        background: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 0 8px ${color}99;
      "></div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })

export function MapArea() {
  return (
    <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[320px] border border-[#00FF7F]/20">
      {/* Badge */}
      <span className="absolute top-3 left-3 bg-[#00FF7F] text-[#111] text-[11px] font-bold px-3 py-1.5 rounded-full z-[999] shadow-sm pointer-events-none">
        Xarita (Viloyatlar + nuqtalar)
      </span>

      <MapContainer
        center={[41.2995, 69.2401]} // Тошкент
        zoom={6}
        style={{ height: '100%', minHeight: '320px', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        {/* CartoDB Dark тайллари — стилингингга мос қоронғу тема */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='© OpenStreetMap © CARTO'
        />

        {/* Донор нуқталари */}
        {DONOR_POINTS.map(point => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={createColorMarker(point.color)}
          >
            <Popup>
              <div style={{ fontFamily: 'sans-serif', minWidth: 140 }}>
                <strong style={{ fontSize: 13 }}>{point.name}</strong>
                <br />
                <span style={{ color: '#00c964', fontWeight: 700 }}>
                  {point.count} донор
                </span>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Тошкент атрофида радиус доираси */}
        <Circle
          center={[41.2995, 69.2401]}
          radius={80000}
          pathOptions={{
            color: '#00FF7F',
            fillColor: '#00FF7F',
            fillOpacity: 0.04,
            weight: 1,
          }}
        />
      </MapContainer>
    </div>
  )
}
