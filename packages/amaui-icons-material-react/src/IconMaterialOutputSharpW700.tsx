import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputSharpW700'
      short_name='Output'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.875V6.925H18.725V5.3H5.3V18.7H18.725V17.075H21.875V21.85ZM16.625 17.425 14.425 15.225 16.05 13.575H8.35V10.425H16.05L14.425 8.775L16.625 6.575L22.05 12Z"/>
    </Icon>
  )
});

export default IconMaterialOutputSharpW700;
