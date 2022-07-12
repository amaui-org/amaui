import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeSharpW100Filled'
      short_name='Landscape'

      {...props}
    >
      <path d="M3.475 16.7 7.125 11.8 10.275 16H12.825L10.525 12.95L14.125 8.15L20.525 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeSharpW100Filled;
