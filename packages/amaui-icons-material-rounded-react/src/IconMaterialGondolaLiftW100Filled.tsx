import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGondolaLiftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GondolaLiftW100Filled'

      short_name='GondolaLift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M223-172q-21.04 0-36.02-14.39Q172-200.79 172-221v-237q0-48.67 36-83.34Q244-576 296-576h170v-149l-358 97q-6 2-11-2.11-5-4.1-5-11.25 0-4.64 2.5-7.64t7.5-5l181-49q-2-4-3-7t-1-8q0-14 9.63-23 9.62-9 23.37-9 14 0 22.5 8.77 8.5 8.78 9.5 22.23l122-33v-22q0-5.95 4.02-9.97Q474.05-788 480-788q5.6 0 9.8 4 4.2 4 4.2 10v14l126-34q-2-4-3-7.5t-1-8.5q0-13.75 9-23.38 9-9.62 23-9.62t23.5 9.5Q681-824 681-810l171-47q6-2 11 2.11 5 4.1 5 11.25 0 4.64-2.5 7.64t-7.5 5l-364 98v157h170q52 0 88 34.66 36 34.67 36 83.34v237q0 20.21-15 34.61Q758-172 738-172H223Zm-23-196h168v-180h-72q-39.6 0-67.8 26.44Q200-495.13 200-458v90Zm196 0h168v-180H396v180Zm196 0h168v-89.91q0-37.09-28.2-63.59T664-548h-72v180Z"/>
    </Icon>
  );
});

IconMaterialGondolaLiftW100Filled.displayName = 'AmauiIconMaterialGondolaLiftW100Filled';

export default IconMaterialGondolaLiftW100Filled;
