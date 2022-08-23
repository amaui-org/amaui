import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullRoundedW100Filled'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M4.4 20.35Q4.075 20.35 3.863 20.138Q3.65 19.925 3.65 19.6V14Q3.65 13.85 3.75 13.75Q3.85 13.65 4 13.65Q4.15 13.65 4.25 13.75Q4.35 13.85 4.35 14V19.175L19.175 4.35H14Q13.85 4.35 13.75 4.25Q13.65 4.15 13.65 4Q13.65 3.85 13.75 3.75Q13.85 3.65 14 3.65H19.6Q19.925 3.65 20.138 3.862Q20.35 4.075 20.35 4.4V10Q20.35 10.15 20.25 10.25Q20.15 10.35 20 10.35Q19.85 10.35 19.75 10.25Q19.65 10.15 19.65 10V4.825L4.825 19.65H10Q10.15 19.65 10.25 19.75Q10.35 19.85 10.35 20Q10.35 20.15 10.25 20.25Q10.15 20.35 10 20.35Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullRoundedW100Filled.displayName = 'AmauiIconMaterialOpenInFullRoundedW100Filled';

export default IconMaterialOpenInFullRoundedW100Filled;
