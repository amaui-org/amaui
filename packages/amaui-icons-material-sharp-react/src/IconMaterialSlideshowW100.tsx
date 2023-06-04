import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideshowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowW100'

      short_name='Slideshow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 15.3 5.15-3.3L10 8.7Zm-5.7 4.4V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialSlideshowW100.displayName = 'AmauiIconMaterialSlideshowW100';

export default IconMaterialSlideshowW100;
