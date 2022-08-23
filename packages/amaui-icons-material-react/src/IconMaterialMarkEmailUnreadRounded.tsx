import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadRounded'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H14.1Q14 4.5 14 5Q14 5.5 14.1 6H4V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V9.9Q20.575 9.775 21.075 9.55Q21.575 9.325 22 9V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6ZM19 8Q17.75 8 16.875 7.125Q16 6.25 16 5Q16 3.75 16.875 2.875Q17.75 2 19 2Q20.25 2 21.125 2.875Q22 3.75 22 5Q22 6.25 21.125 7.125Q20.25 8 19 8ZM12 11 15.65 8.725Q16 9.05 16.413 9.287Q16.825 9.525 17.275 9.7L12.525 12.675Q12.275 12.825 12 12.825Q11.725 12.825 11.475 12.675L4 8Q4 8 4 8Q4 8 4 8V6Q4 6 4 6Q4 6 4 6Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadRounded.displayName = 'AmauiIconMaterialMarkEmailUnreadRounded';

export default IconMaterialMarkEmailUnreadRounded;
