import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Airplay'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 21 6-6 6 6Zm-4-2V3h20v16h-5v-2h3V5H4v12h3v2Zm10-8Z"/>
    </Icon>
  );
});

IconMaterialAirplay.displayName = 'AmauiIconMaterialAirplay';

export default IconMaterialAirplay;
