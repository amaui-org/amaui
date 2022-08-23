import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioSharpFilled'
      short_name='ImageAspectRatio'

      {...props}
    >
      <path d="M14 12H16V10H14ZM14 16H16V14H14ZM6 12H8V10H6ZM10 12H12V10H10ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioSharpFilled.displayName = 'AmauiIconMaterialImageAspectRatioSharpFilled';

export default IconMaterialImageAspectRatioSharpFilled;
