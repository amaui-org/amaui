import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeOutlinedFilled'
      short_name='Landscape'

      {...props}
    >
      <path d="M1 18 7 10 11.5 16H14.025L10.25 11L14 6L23 18Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeOutlinedFilled;
