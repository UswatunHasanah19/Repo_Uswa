import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
const [input, setInput] = useState<string>('')

useEffect(() => {
console.log(input)
}, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AppUswa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonButton routerLink="/register" color="secondary">Register</IonButton>
        <IonButton routerLink="/login">Login</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Home;
