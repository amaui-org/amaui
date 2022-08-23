import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageHomeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeRoundedW100Filled'
      short_name='GarageHome'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575l6.7 5.075V19.7h-2.35v-8.725h-8.7V19.7Zm3.05-.725h7.3v-3.3h-7.3Zm0-4h7.3v-3.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeRoundedW100Filled.displayName = 'AmauiIconMaterialGarageHomeRoundedW100Filled';

export default IconMaterialGarageHomeRoundedW100Filled;
