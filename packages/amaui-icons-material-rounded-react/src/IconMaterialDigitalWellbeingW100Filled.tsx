import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalWellbeingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalWellbeingW100Filled'

      short_name='DigitalWellbeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-606q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm-21 415L268-382q-14-14-21-32.5t-7-39.5q0-42 29-71t71-29q20 0 37.5 7.5T410-524l70 70 70-70q14-14 32-22t38-8q42 0 71 29t29 71q0 21-7 39.5T692-382L501-191q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialDigitalWellbeingW100Filled.displayName = 'AmauiIconMaterialDigitalWellbeingW100Filled';

export default IconMaterialDigitalWellbeingW100Filled;
