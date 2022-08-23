import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageHomeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeRoundedFilled'
      short_name='GarageHome'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-3V11H7v10Zm5-2h6v-2H9Zm0-4h6v-2H9Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeRoundedFilled.displayName = 'AmauiIconMaterialGarageHomeRoundedFilled';

export default IconMaterialGarageHomeRoundedFilled;
