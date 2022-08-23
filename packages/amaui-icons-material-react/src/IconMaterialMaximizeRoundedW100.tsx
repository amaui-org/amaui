import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeRoundedW100'
      short_name='Maximize'

      {...props}
    >
      <path d="M3.975 4.35Q3.85 4.35 3.75 4.25Q3.65 4.15 3.65 4Q3.65 3.85 3.75 3.75Q3.85 3.65 4 3.65H20.025Q20.15 3.65 20.25 3.75Q20.35 3.85 20.35 4Q20.35 4.15 20.25 4.25Q20.15 4.35 20 4.35Z"/>
    </Icon>
  );
});

IconMaterialMaximizeRoundedW100.displayName = 'AmauiIconMaterialMaximizeRoundedW100';

export default IconMaterialMaximizeRoundedW100;
