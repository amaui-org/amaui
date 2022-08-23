import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowSharpW100'
      short_name='Slideshow'

      {...props}
    >
      <path d="M10 15.3 15.15 12 10 8.7ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialSlideshowSharpW100.displayName = 'AmauiIconMaterialSlideshowSharpW100';

export default IconMaterialSlideshowSharpW100;
