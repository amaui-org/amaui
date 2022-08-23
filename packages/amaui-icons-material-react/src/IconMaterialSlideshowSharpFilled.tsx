import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowSharpFilled'
      short_name='Slideshow'

      {...props}
    >
      <path d="M9.5 16.5 16.5 12 9.5 7.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialSlideshowSharpFilled.displayName = 'AmauiIconMaterialSlideshowSharpFilled';

export default IconMaterialSlideshowSharpFilled;
