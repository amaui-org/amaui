import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatPaintSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintSharpFilled'
      short_name='FormatPaint'

      {...props}
    >
      <path d="M9 22V16H4V7Q4 5.35 5.175 4.175Q6.35 3 8 3H20V16H15V22ZM6 10H18V5H17V9H15V5H14V7H12V5H8Q7.175 5 6.588 5.588Q6 6.175 6 7Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintSharpFilled.displayName = 'AmauiIconMaterialFormatPaintSharpFilled';

export default IconMaterialFormatPaintSharpFilled;
