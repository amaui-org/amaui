import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTouchAppSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppSharpFilled'
      short_name='TouchApp'

      {...props}
    >
      <path d="M9 9.25Q8.15 8.675 7.575 7.687Q7 6.7 7 5.5Q7 3.625 8.312 2.312Q9.625 1 11.5 1Q13.375 1 14.688 2.312Q16 3.625 16 5.5Q16 6.75 15.413 7.712Q14.825 8.675 14 9.25V5.5Q14 4.45 13.275 3.725Q12.55 3 11.5 3Q10.45 3 9.725 3.725Q9 4.45 9 5.5ZM10.15 22 4.75 16.625 5.95 15.375 10 16.25V5.5Q10 4.875 10.438 4.438Q10.875 4 11.5 4Q12.125 4 12.562 4.438Q13 4.875 13 5.5V11.5H14.075L20.175 14.35L19.1 22Z"/>
    </Icon>
  );
});

IconMaterialTouchAppSharpFilled.displayName = 'AmauiIconMaterialTouchAppSharpFilled';

export default IconMaterialTouchAppSharpFilled;
