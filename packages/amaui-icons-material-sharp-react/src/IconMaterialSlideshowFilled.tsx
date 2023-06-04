import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideshowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowFilled'

      short_name='Slideshow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 16.5 7-4.5-7-4.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialSlideshowFilled.displayName = 'AmauiIconMaterialSlideshowFilled';

export default IconMaterialSlideshowFilled;
