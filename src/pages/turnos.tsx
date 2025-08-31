import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

export default function Turnos() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Turnos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: 16 }}>
          <h2>Formulario de Turnos</h2>
          <p>Aquí armamos la selección de servicios, fecha y hora.</p>
        </div>
      </IonContent>
    </IonPage>
  );
}
