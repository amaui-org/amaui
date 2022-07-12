import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaSharp'
      short_name='Panorama'

      {...props}
    >
      <path d="M6 16H18L14.25 11L11.25 15L9 12ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialPanoramaSharp;
