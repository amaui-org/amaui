import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flight'

      short_name='Flight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z"/>
    </Icon>
  );
});

IconMaterialFlight.displayName = 'AmauiIconMaterialFlight';

export default IconMaterialFlight;
