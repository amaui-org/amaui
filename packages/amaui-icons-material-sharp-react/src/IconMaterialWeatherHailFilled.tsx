import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherHailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherHailFilled'

      short_name='WeatherHail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m500-40-60-60 60-60 60 60-60 60Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherHailFilled.displayName = 'AmauiIconMaterialWeatherHailFilled';

export default IconMaterialWeatherHailFilled;
