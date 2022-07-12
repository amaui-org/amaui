import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioSharpW700'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M5.3 12.3H7.3V9.3H10.3V7.3H5.3ZM13.7 16.7H18.7V11.7H16.7V14.7H13.7ZM22.85 20.85H1.15V3.15H22.85ZM4.3 17.7V6.3ZM4.3 17.7H19.7V6.3H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialAspectRatioSharpW700;
