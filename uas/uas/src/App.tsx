import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { person, flash, time, settings } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu contentId="main">
          <IonHeader className="ion-padding">
            <IonIcon icon={} />
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/profile">
                  <IonIcon icon={person} size="large"/>
                  <IonLabel className='menu'>Profile</IonLabel>
                </IonItem>
                <IonItem button routerLink="/new">
                  <IonIcon icon={flash}size="large" />
                  <IonLabel className='menu'>What's new</IonLabel>
                </IonItem>
                <IonItem button routerLink="/history">
                  <IonIcon icon={time}size="large" />
                  <IonLabel className='menu'>Listening history</IonLabel>
                </IonItem>
                <IonItem button routerLink="/setting">
                  <IonIcon icon={settings} size="large"/>
                  <IonLabel className='menu'>Settings and privacy</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
      <IonRouterOutlet>
        <IonRouterOutlet id="main">
          <Route exact path="/home" component={Home} />
          <Redirect exact path="/" to="/home" />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/history" component={History} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/podcast" component={Podcast} />
          <Route path="/music/:musicId" component={MusicDetail} />
          <Route path="/podcast/:podcastId" component={PodcastDetail} />
        </IonRouterOutlet>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

