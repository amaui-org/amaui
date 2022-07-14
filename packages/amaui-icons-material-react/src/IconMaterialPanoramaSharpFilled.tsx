import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaSharpFilled'
      short_name='Panorama'

      {...props}
    >
      <path d="M6 16H18L14.25 11L11.25 15L9 12ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialPanoramaSharpFilled;
