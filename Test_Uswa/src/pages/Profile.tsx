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
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton routerLink="/">Logout</IonButton>
        </IonContent>
      </IonPage>
    )
  }
  
  export default Home;
  