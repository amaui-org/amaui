import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationCityTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityTwoTone'
      short_name='LocationCity'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
    </Icon>
  );
});

IconMaterialLocationCityTwoTone.displayName = 'AmauiIconMaterialLocationCityTwoTone';

export default IconMaterialLocationCityTwoTone;
