import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioSharp'
      short_name='ImageAspectRatio'

      {...props}
    >
      <path d="M14 12H16V10H14ZM14 16H16V14H14ZM6 12H8V10H6ZM10 12H12V10H10ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioSharp.displayName = 'AmauiIconMaterialImageAspectRatioSharp';

export default IconMaterialImageAspectRatioSharp;
