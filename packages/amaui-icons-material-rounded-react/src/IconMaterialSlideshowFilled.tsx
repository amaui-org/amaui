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
      <path d="m11.05 15.5 4.15-2.65q.225-.15.35-.375.125-.225.125-.475 0-.25-.125-.475-.125-.225-.35-.375L11.05 8.5q-.5-.35-1.025-.05-.525.3-.525.875v5.35q0 .575.525.875.525.3 1.025-.05ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSlideshowFilled.displayName = 'AmauiIconMaterialSlideshowFilled';

export default IconMaterialSlideshowFilled;
