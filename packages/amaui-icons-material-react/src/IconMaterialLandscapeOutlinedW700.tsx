import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeOutlinedW700'
      short_name='Landscape'

      {...props}
    >
      <path d="M0.225 18.375 7 9.35 11.425 15.225H17.475L14 10.625L12.225 13L10.25 10.35L14 5.35L23.775 18.375ZM13.9 15.225ZM6 15.225H8L7 13.875ZM6 15.225H7H8Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeOutlinedW700;
