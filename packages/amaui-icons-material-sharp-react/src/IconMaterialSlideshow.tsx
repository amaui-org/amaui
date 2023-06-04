import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideshow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Slideshow'

      short_name='Slideshow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 16.5 7-4.5-7-4.5ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialSlideshow.displayName = 'AmauiIconMaterialSlideshow';

export default IconMaterialSlideshow;
