import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Vibration,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import notifee, { AuthorizationStatus, EventType, AndroidImportance, TriggerType, RepeatFrequency} from '@notifee/react-native';

export default function App() {
  const [statusNotification, setStatusNotification] = useState(true);

  useEffect(() =>{
    async function getPermission() {
      const settings = await notifee.requestPermission();
      if(settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED){
        console.log("Permission:", settings.authorizationStatus)
        setStatusNotification(true)
      } else {
        console.log("Usuario negou a permissão!")
        setStatusNotification(false)

      }

    }
    getPermission();
  }, [])

  //NOTIFICAÇÃO DE BACKGROUND - QUANDO O APP ESTIVER MINIMIZADO OU FECHADO
  notifee.onBackgroundEvent(async ({ type, detail}) => {
    const { notification, pressAction } = detail;

    if(type == EventType.PRESS){
      console.log("Clicou na notificação do Background: ", pressAction?.id)
      if(notification?.id){
        await notifee.cancelNotification(notification?.id)
      }
    }
    console.log("Evento do Background")


  })

  //EVENTO QUE APARECE NA TELA ABERTA
  useEffect(() =>{
    return notifee.onForegroundEvent(({ type, detail}) =>{
      switch (type) {
        case EventType.DISMISSED:
          console.log("Usuario descartou a notificação")
          break;
        case EventType.PRESS:
          console.log("Tocou na notificação: ", detail.notification)
      }
    })
  },[])

  async function handleNotificate() {
    if(!statusNotification){
      return;
    }

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      Vibration: true,
      importance: AndroidImportance.HIGH
    })

    await notifee.displayNotification({
      id: 'Atenção',
      title: 'Produto em Promoção',
      body: 'Veja agora as nossas promoções de Black Friday!',
      android: {
       channelId,
       pressAction: {
        id: 'default'
       } 
      }
    })
  }

  async function handleNewNotificate() {
    const date = new Date(Date.now())

    date.setSeconds(date.getSeconds() + 45);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    //AGUARDANDO O DISPARO DA NOTIFICAÇÃO
    await notifee.createTriggerNotification({
      title: "Lembrete para hoje",
      body: "Estudar notificação do React Ntive ainda hoje",
      android:{
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction:{
          id: 'default'
        }
      }

    }, trigger)

  }

  function handleListNotifications(){
    notifee.getTriggerNotificationIds()
    .then((ids) =>{
      console.log(ids)
    })
  }

  async function handleCancelNotification() {
    notifee.cancelNotification("UoTvnLUHEFeFxOmpjkRE")

  }

  async function handleWeekly() {
    const date = new Date(Date.now());

    date.setMinutes(date.getMinutes() + 1);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      RepeatFrequency: RepeatFrequency.WEEKLY
    }

    await notifee.createTriggerNotification({
      title: "Lembrete - React Native",
      body: "Estude semanalmente",
      android:{
        channelId: "lembrete",
        importance: AndroidImportance.HIGH,
        pressAction:{
          id: "default"
        }
      }
    }, trigger)

  }

  return (
    <LinearGradient style={styles.container}
    colors={['#134e5e', '#71b280']}
    >
      <Text style={styles.titulo}>Notificaçoes APP</Text>
      <Button title="Enviar notificação" onPress={handleNotificate}
      style={styles.title}
      />
      
      <Button title="Agendar Notificação" onPress={handleNewNotificate}/>

         
      <Button title="Lista Notifiçoes" onPress={handleListNotifications}/>

      <Button title="Cancelar Notifiçoes agendada" onPress={handleCancelNotification}/>

      <Button title="Agendar Semanalmente" onPress={handleWeekly}/>      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  title: {
    backgroundColor: '#050000ff',
    placeholder: '#be1717ff',
    color: '#03dba5ff'
  },
  titulo: {
    color: '#000000ff',
    fontSize: 35,
    style: 'bold'

  }
});
