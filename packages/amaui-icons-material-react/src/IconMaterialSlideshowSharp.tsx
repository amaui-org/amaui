import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowSharp'
      short_name='Slideshow'

      {...props}
    >
      <path d="M9.5 16.5 16.5 12 9.5 7.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialSlideshowSharp.displayName = 'AmauiIconMaterialSlideshowSharp';

export default IconMaterialSlideshowSharp;
