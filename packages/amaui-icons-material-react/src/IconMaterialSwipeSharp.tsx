import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeSharp'
      short_name='Swipe'

      {...props}
    >
      <path d="M2 7V2H3.5V4Q5.3 2.525 7.475 1.762Q9.65 1 12 1Q14.35 1 16.525 1.762Q18.7 2.525 20.5 4V2H22V7H17V5.5H19.9Q18.25 4.05 16.225 3.275Q14.2 2.5 12 2.5Q9.8 2.5 7.775 3.275Q5.75 4.05 4.1 5.5H7V7ZM9.7 23 3.95 17.25 6.125 15 9 15.65V7.5Q9 6.45 9.725 5.725Q10.45 5 11.5 5Q12.55 5 13.275 5.725Q14 6.45 14 7.5V11.8H14.8L20.1 14.375L18.675 23ZM10.55 21H16.95L17.9 15.55L13.75 13.5H12V7.5Q12 7.275 11.863 7.137Q11.725 7 11.5 7Q11.275 7 11.137 7.137Q11 7.275 11 7.5V18.1L6.75 17.2ZM10.55 21H11Q11 21 11.137 21Q11.275 21 11.5 21Q11.725 21 11.863 21Q12 21 12 21H13.75H16.95Z"/>
    </Icon>
  );
});

IconMaterialSwipeSharp.displayName = 'AmauiIconMaterialSwipeSharp';

export default IconMaterialSwipeSharp;
