import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatListBulletedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedRounded'
      short_name='FormatListBulleted'

      {...props}
    >
      <path d="M4.5 13.5Q3.875 13.5 3.438 13.062Q3 12.625 3 12Q3 11.375 3.438 10.938Q3.875 10.5 4.5 10.5Q5.125 10.5 5.562 10.938Q6 11.375 6 12Q6 12.625 5.562 13.062Q5.125 13.5 4.5 13.5ZM4.5 7.5Q3.875 7.5 3.438 7.062Q3 6.625 3 6Q3 5.375 3.438 4.938Q3.875 4.5 4.5 4.5Q5.125 4.5 5.562 4.938Q6 5.375 6 6Q6 6.625 5.562 7.062Q5.125 7.5 4.5 7.5ZM4.5 19.5Q3.875 19.5 3.438 19.062Q3 18.625 3 18Q3 17.375 3.438 16.938Q3.875 16.5 4.5 16.5Q5.125 16.5 5.562 16.938Q6 17.375 6 18Q6 18.625 5.562 19.062Q5.125 19.5 4.5 19.5ZM9 19Q8.575 19 8.288 18.712Q8 18.425 8 18Q8 17.575 8.288 17.288Q8.575 17 9 17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM9 7Q8.575 7 8.288 6.713Q8 6.425 8 6Q8 5.575 8.288 5.287Q8.575 5 9 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedRounded.displayName = 'AmauiIconMaterialFormatListBulletedRounded';

export default IconMaterialFormatListBulletedRounded;
