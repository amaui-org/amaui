import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeSharpFilled'
      short_name='Swipe'

      {...props}
    >
      <path d="M2 7V2H3.5V4Q5.3 2.525 7.475 1.762Q9.65 1 12 1Q14.35 1 16.525 1.762Q18.7 2.525 20.5 4V2H22V7H17V5.5H19.9Q18.25 4.05 16.225 3.275Q14.2 2.5 12 2.5Q9.8 2.5 7.775 3.275Q5.75 4.05 4.1 5.5H7V7ZM10.125 23 5 17.625 6.2 16.375 10 17.25V6.5Q10 5.875 10.438 5.438Q10.875 5 11.5 5Q12.125 5 12.562 5.438Q13 5.875 13 6.5V12.5H14.4L20.175 15.4L19.1 23Z"/>
    </Icon>
  );
});

IconMaterialSwipeSharpFilled.displayName = 'AmauiIconMaterialSwipeSharpFilled';

export default IconMaterialSwipeSharpFilled;
