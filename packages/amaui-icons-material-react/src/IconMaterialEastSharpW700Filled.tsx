import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastSharpW700Filled'
      short_name='East'

      {...props}
    >
      <path d="M14.95 19.85 12.725 17.65 16.775 13.575H1.425V10.425H16.775L12.725 6.35L14.95 4.125L22.8 12Z"/>
    </Icon>
  )
});

export default IconMaterialEastSharpW700Filled;
