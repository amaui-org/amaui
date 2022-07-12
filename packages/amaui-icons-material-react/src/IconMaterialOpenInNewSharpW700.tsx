import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewSharpW700'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M2.15 21.85V2.15H12V5.3H5.3V18.7H18.7V12H21.85V21.85ZM10.475 15.7 8.3 13.525 16.525 5.3H14V2.15H21.85V10H18.7V7.475Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewSharpW700;
