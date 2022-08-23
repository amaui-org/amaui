import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandslideSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideSharpFilled'
      short_name='Landslide'

      {...props}
    >
      <path d="M2 22V17.75L6 19.05L17.025 15.375L22 22ZM6 16.95 2 15.6V13.75L6 15.05L12.9 12.75L15.45 13.775ZM18.5 14 23 12V8L18.5 7L16 9V12ZM6 12.95 2 11.6V8H8L10.575 11.425ZM12 8 17 6V1L12 0L9 2V6Z"/>
    </Icon>
  );
});

IconMaterialLandslideSharpFilled.displayName = 'AmauiIconMaterialLandslideSharpFilled';

export default IconMaterialLandslideSharpFilled;
