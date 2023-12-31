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
      <path d="M529-96q-14 0-24-9.5T495-129q0-6 2-12t7-11l25-23 25 23q5 5 7 11t2 12q0 14-10 23.5T529-96Zm-138-55-21-21 97-97 21 21-97 97Zm258-60-39-39 39-39 39 39-39 39Zm-360 0-39-39 39-39 39 39-39 39Zm11-135q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixW100Filled.displayName = 'AmauiIconMaterialWeatherMixW100Filled';

export default IconMaterialWeatherMixW100Filled;
