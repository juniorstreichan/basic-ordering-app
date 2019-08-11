import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import Orders from './screens/Orders';

const Routes = createAppContainer(createSwitchNavigator({ Home, Orders }));

export default Routes;
