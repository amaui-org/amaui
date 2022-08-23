import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2Rounded'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M5 19H14V15Q14 14.575 14.288 14.287Q14.575 14 15 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V15L15 21ZM8 14Q7.575 14 7.287 13.712Q7 13.425 7 13Q7 12.575 7.287 12.287Q7.575 12 8 12H11Q11.425 12 11.713 12.287Q12 12.575 12 13Q12 13.425 11.713 13.712Q11.425 14 11 14ZM8 10Q7.575 10 7.287 9.712Q7 9.425 7 9Q7 8.575 7.287 8.287Q7.575 8 8 8H16Q16.425 8 16.712 8.287Q17 8.575 17 9Q17 9.425 16.712 9.712Q16.425 10 16 10ZM5 19V14V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2Rounded.displayName = 'AmauiIconMaterialStickyNote2Rounded';

export default IconMaterialStickyNote2Rounded;
