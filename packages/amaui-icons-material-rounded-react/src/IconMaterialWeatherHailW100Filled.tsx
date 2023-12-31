import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherHailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherHailW100Filled'

      short_name='WeatherHail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m559-121-17 17q-5 5-11 5t-11-5l-17-17q-5-5-5-11t5-11l17-17q5-5 11-5t11 5l17 17q5 5 5 11t-5 11Zm-176-43q-5-5-5-10t5-10l76-76q5-5 10-5t10 5q5 5 5 10t-5 10l-76 76q-5 5-10 5t-10-5Zm296-77-17 17q-5 5-11 5t-11-5l-17-17q-5-5-5-11t5-11l17-17q5-5 11-5t11 5l17 17q5 5 5 11t-5 11Zm-360 0-17 17q-5 5-11 5t-11-5l-17-17q-5-5-5-11t5-11l17-17q5-5 11-5t11 5l17 17q5 5 5 11t-5 11Zm-19-105q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherHailW100Filled.displayName = 'AmauiIconMaterialWeatherHailW100Filled';

export default IconMaterialWeatherHailW100Filled;
