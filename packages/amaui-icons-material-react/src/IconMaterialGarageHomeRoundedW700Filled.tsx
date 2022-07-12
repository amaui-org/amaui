import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageHomeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeRoundedW700Filled'
      short_name='GarageHome'

      {...props}
    >
      <path d="M3.15 21.85V8.575L12 1.925l8.85 6.65V21.85H16.7V10.7H7.3v11.15Zm6.925-2.775h3.85V17.65h-3.85Zm0-4.2h3.85V13.45h-3.85Z"/>
    </Icon>
  )
});

export default IconMaterialGarageHomeRoundedW700Filled;
