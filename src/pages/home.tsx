import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonItem, IonLabel, IonList, IonSpinner
} from "@ionic/react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

type Servicio = { id:string; nombre:string; descripcion:string; precio:number; tiempo:number };

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, "servicios"));
      setServicios(snap.docs.map(d => ({ id: d.id, ...d.data() } as Servicio)));
      setLoading(false);
    })();
  }, []);

  return (
    <IonPage>
      

      <IonContent fullscreen>
        <div className="home-hero">
          <div className="home-logo">
            <img src="/logo.png" alt="Amate bien — by Ro Donnari" />
          </div>
        </div>

        <div className="cta">
          <IonButton
            className="reserve-btn"
            routerLink="/turnos"
            routerDirection="forward"
            color="primary"
            fill="solid"
          >
            ✂️ Reservar Turno
          </IonButton>
        </div>

        <div className="home-card">
          <h2 className="section-title" style={{ textAlign: "center" }}>Servicios & Precios</h2>
          {loading ? (
            <div style={{ display:"grid", placeItems:"center", padding:18 }}>
              <IonSpinner name="crescent" />
            </div>
          ) : (
            <IonList lines="none">
              {servicios.map(s => (
                <IonItem key={s.id} className="service-item">
                  <IonLabel>
                    <h3>{s.nombre} <span>${s.precio.toLocaleString("es-AR")}</span></h3>
                    <p>{s.descripcion}</p>
                    <div className="time-chip">⏱ {s.tiempo} min</div>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
}
