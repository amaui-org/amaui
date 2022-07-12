import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowSharpW100Filled'
      short_name='Slideshow'

      {...props}
    >
      <path d="M10 15.3 15.15 12 10 8.7ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialSlideshowSharpW100Filled;
