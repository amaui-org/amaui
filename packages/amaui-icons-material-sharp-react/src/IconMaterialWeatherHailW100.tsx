import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherHailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherHailW100'

      short_name='WeatherHail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m531-93-39-39 39-39 39 39-39 39Zm-138-60-21-21 97-97 21 21-97 97Zm258-60-39-39 39-39 39 39-39 39Zm-360 0-39-39 39-39 39 39-39 39Zm9-133q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-77-54.5-131.5T480-826q-56 0-102 30.5T309-714l-3 8h-8q-68 2-116 50t-48 116q0 69 48.5 117.5T300-374Zm180-226Z"/>
    </Icon>
  );
});

IconMaterialWeatherHailW100.displayName = 'AmauiIconMaterialWeatherHailW100';

export default IconMaterialWeatherHailW100;
