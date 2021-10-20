import { 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonPage, 
    IonText, 
    IonTitle, 
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonItemOptions,
    IonItemSliding,
    IonItemOption,
    IonButton,
    IonInput
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
            <IonTitle>Example Page!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Hello from Example!
        </IonContent>
      </IonPage>
    )
  }
  
  export default Home;
  