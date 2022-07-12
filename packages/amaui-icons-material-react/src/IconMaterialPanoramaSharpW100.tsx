import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaSharpW100'
      short_name='Panorama'

      {...props}
    >
      <path d="M7.95 16H16.25L13.7 12.6L11.2 15.7L9.6 13.85ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialPanoramaSharpW100;
