import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeRounded'
      short_name='FormatSize'

      {...props}
    >
      <path d="M15.5 20Q14.875 20 14.438 19.562Q14 19.125 14 18.5V7H10.5Q9.875 7 9.438 6.562Q9 6.125 9 5.5Q9 4.875 9.438 4.438Q9.875 4 10.5 4H20.5Q21.125 4 21.562 4.438Q22 4.875 22 5.5Q22 6.125 21.562 6.562Q21.125 7 20.5 7H17V18.5Q17 19.125 16.562 19.562Q16.125 20 15.5 20ZM6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5V12H3.5Q2.875 12 2.438 11.562Q2 11.125 2 10.5Q2 9.875 2.438 9.438Q2.875 9 3.5 9H9.5Q10.125 9 10.562 9.438Q11 9.875 11 10.5Q11 11.125 10.562 11.562Q10.125 12 9.5 12H8V18.5Q8 19.125 7.562 19.562Q7.125 20 6.5 20Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeRounded.displayName = 'AmauiIconMaterialFormatSizeRounded';

export default IconMaterialFormatSizeRounded;
