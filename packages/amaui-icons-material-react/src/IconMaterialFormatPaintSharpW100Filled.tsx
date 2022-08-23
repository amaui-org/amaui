import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatPaintSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintSharpW100Filled'
      short_name='FormatPaint'

      {...props}
    >
      <path d="M10.3 20.95V14.45H5.5V6.25Q5.5 5.35 6.15 4.7Q6.8 4.05 7.7 4.05H18.5V14.45H13.7V20.95ZM6.2 10.55H17.8V4.75H16.05V8.5H15.35V4.75H13.35V6.75H12.65V4.75H7.7Q7.05 4.75 6.625 5.175Q6.2 5.6 6.2 6.25Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintSharpW100Filled.displayName = 'AmauiIconMaterialFormatPaintSharpW100Filled';

export default IconMaterialFormatPaintSharpW100Filled;
