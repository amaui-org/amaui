import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowSharpW700'
      short_name='Slideshow'

      {...props}
    >
      <path d="M9.3 16.85 16.85 12 9.3 7.15ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialSlideshowSharpW700;
