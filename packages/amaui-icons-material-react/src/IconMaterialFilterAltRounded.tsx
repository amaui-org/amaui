import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltRounded'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M14 13V19Q14 19.425 13.713 19.712Q13.425 20 13 20H11Q10.575 20 10.288 19.712Q10 19.425 10 19V13L4.2 5.6Q3.825 5.1 4.088 4.55Q4.35 4 5 4H19Q19.65 4 19.913 4.55Q20.175 5.1 19.8 5.6ZM12 12.3 16.95 6H7.05ZM12 12.3Z"/>
    </Icon>
  );
});

IconMaterialFilterAltRounded.displayName = 'AmauiIconMaterialFilterAltRounded';

export default IconMaterialFilterAltRounded;
