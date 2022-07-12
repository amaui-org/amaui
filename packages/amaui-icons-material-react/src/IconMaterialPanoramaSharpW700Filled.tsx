import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaSharpW700Filled'
      short_name='Panorama'

      {...props}
    >
      <path d="M5.425 16H18.575L14.25 10.2L11.25 14.2L9 11.2ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPanoramaSharpW700Filled;
