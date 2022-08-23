import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughRounded'
      short_name='FormatStrikethrough'

      {...props}
    >
      <path d="M3 14Q2.575 14 2.288 13.712Q2 13.425 2 13Q2 12.575 2.288 12.287Q2.575 12 3 12H21Q21.425 12 21.712 12.287Q22 12.575 22 13Q22 13.425 21.712 13.712Q21.425 14 21 14ZM10.5 10V7H6.5Q5.875 7 5.438 6.562Q5 6.125 5 5.5Q5 4.875 5.438 4.438Q5.875 4 6.5 4H17.5Q18.125 4 18.562 4.438Q19 4.875 19 5.5Q19 6.125 18.562 6.562Q18.125 7 17.5 7H13.5V10ZM12 20Q11.375 20 10.938 19.562Q10.5 19.125 10.5 18.5V16H13.5V18.5Q13.5 19.125 13.062 19.562Q12.625 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughRounded.displayName = 'AmauiIconMaterialFormatStrikethroughRounded';

export default IconMaterialFormatStrikethroughRounded;
