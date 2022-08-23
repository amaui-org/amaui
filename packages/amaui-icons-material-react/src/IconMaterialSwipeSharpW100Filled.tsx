import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeSharpW100Filled'
      short_name='Swipe'

      {...props}
    >
      <path d="M2.8 6.2V2H3.5V4.9Q5.3 3.4 7.475 2.55Q9.65 1.7 12 1.7Q14.35 1.7 16.525 2.537Q18.7 3.375 20.5 4.9V2H21.2V6.2H17V5.5H20.15Q18.375 4.1 16.325 3.25Q14.275 2.4 12 2.4Q9.725 2.4 7.675 3.25Q5.625 4.1 3.85 5.5H7V6.2ZM10.25 21.7 5.75 17.25 6.5 16.5 10.3 17.25V7.5Q10.3 7 10.65 6.65Q11 6.3 11.5 6.3Q12 6.3 12.35 6.65Q12.7 7 12.7 7.5V12.8H13.9L18.7 15.15L17.55 21.7Z"/>
    </Icon>
  );
});

IconMaterialSwipeSharpW100Filled.displayName = 'AmauiIconMaterialSwipeSharpW100Filled';

export default IconMaterialSwipeSharpW100Filled;
