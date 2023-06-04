import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideshowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowW100Filled'

      short_name='Slideshow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 15.3 5.15-3.3L10 8.7Zm-5.7 4.4V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialSlideshowW100Filled.displayName = 'AmauiIconMaterialSlideshowW100Filled';

export default IconMaterialSlideshowW100Filled;
