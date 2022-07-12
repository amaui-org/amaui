import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMagicButtonOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButtonOutlinedW700'
      short_name='MagicButton'

      {...props}
    >
      <path d="M9.7 20.075 6.8 13.725 0.475 10.85 6.8 7.975 9.7 1.625 12.575 7.975 18.925 10.85 12.575 13.725ZM18.925 22.375 17.475 19.2 14.3 17.775 17.475 16.325 18.925 13.15 20.35 16.325 23.525 17.775 20.35 19.2Z"/>
    </Icon>
  )
});

export default IconMaterialMagicButtonOutlinedW700;
