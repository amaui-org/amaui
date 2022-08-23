import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTipsAndUpdatesRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TipsAndUpdatesRounded'
      short_name='TipsAndUpdates'

      {...props}
    >
      <path d="M21.375 8.625 20 8 21.375 7.375 22 6 22.625 7.375 24 8 22.625 8.625 22 10ZM18.05 3.95 16 3 18.05 2.05 19 0 19.95 2.05 22 3 19.95 3.95 19 6ZM9 22Q8.175 22 7.588 21.413Q7 20.825 7 20H11Q11 20.825 10.413 21.413Q9.825 22 9 22ZM6 19Q5.575 19 5.287 18.712Q5 18.425 5 18Q5 17.575 5.287 17.288Q5.575 17 6 17H12Q12.425 17 12.713 17.288Q13 17.575 13 18Q13 18.425 12.713 18.712Q12.425 19 12 19ZM5.25 16Q3.525 14.975 2.513 13.25Q1.5 11.525 1.5 9.5Q1.5 6.375 3.688 4.188Q5.875 2 9 2Q12.125 2 14.312 4.188Q16.5 6.375 16.5 9.5Q16.5 11.525 15.488 13.25Q14.475 14.975 12.75 16ZM5.85 14H12.15Q13.275 13.2 13.887 12.025Q14.5 10.85 14.5 9.5Q14.5 7.2 12.9 5.6Q11.3 4 9 4Q6.7 4 5.1 5.6Q3.5 7.2 3.5 9.5Q3.5 10.85 4.113 12.025Q4.725 13.2 5.85 14ZM9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Q9 14 9 14Z"/>
    </Icon>
  );
});

IconMaterialTipsAndUpdatesRounded.displayName = 'AmauiIconMaterialTipsAndUpdatesRounded';

export default IconMaterialTipsAndUpdatesRounded;
