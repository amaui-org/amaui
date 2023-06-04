import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayFilled'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 21 6-6 6 6Zm-4-2V3h20v16h-3l-7-7-7 7Z"/>
    </Icon>
  );
});

IconMaterialAirplayFilled.displayName = 'AmauiIconMaterialAirplayFilled';

export default IconMaterialAirplayFilled;
