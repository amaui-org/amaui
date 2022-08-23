import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltRoundedFilled'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M11 20Q10.575 20 10.288 19.712Q10 19.425 10 19V13L4.2 5.6Q3.825 5.1 4.088 4.55Q4.35 4 5 4H19Q19.65 4 19.913 4.55Q20.175 5.1 19.8 5.6L14 13V19Q14 19.425 13.713 19.712Q13.425 20 13 20Z"/>
    </Icon>
  );
});

IconMaterialFilterAltRoundedFilled.displayName = 'AmauiIconMaterialFilterAltRoundedFilled';

export default IconMaterialFilterAltRoundedFilled;
