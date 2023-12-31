import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherMixW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherMixW100Filled'

      short_name='WeatherMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M529-96q-14 0-24-9.5T495-129q0-6 2-12t7-11l15-13q5-4 10-4t10 4l15 13q5 5 7 11t2 12q0 14-10 23.5T529-96Zm-148-66q-5-5-5-10t5-10l76-76q5-5 10-5t10 5q5 5 5 10t-5 10l-76 76q-5 5-10 5t-10-5Zm257-60-17-17q-5-5-5-11t5-11l17-17q5-5 11-5t11 5l17 17q5 5 5 11t-5 11l-17 17q-5 5-11 5t-11-5Zm-321-17-17 17q-5 5-11 5t-11-5l-17-17q-5-5-5-11t5-11l17-17q5-5 11-5t11 5l17 17q5 5 5 11t-5 11Zm-17-107q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixW100Filled.displayName = 'AmauiIconMaterialWeatherMixW100Filled';

export default IconMaterialWeatherMixW100Filled;
