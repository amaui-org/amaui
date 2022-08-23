import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicRounded'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5Q5 17.875 5.438 17.438Q5.875 17 6.5 17H8.375L12.375 7H10.5Q9.875 7 9.438 6.562Q9 6.125 9 5.5Q9 4.875 9.438 4.438Q9.875 4 10.5 4H17.5Q18.125 4 18.562 4.438Q19 4.875 19 5.5Q19 6.125 18.562 6.562Q18.125 7 17.5 7H15.625L11.625 17H13.5Q14.125 17 14.562 17.438Q15 17.875 15 18.5Q15 19.125 14.562 19.562Q14.125 20 13.5 20Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicRounded.displayName = 'AmauiIconMaterialFormatItalicRounded';

export default IconMaterialFormatItalicRounded;
