import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedRounded'
      short_name='Feed'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H16L21 8V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19V9H16Q15.575 9 15.288 8.712Q15 8.425 15 8V5H5ZM8 17H16Q16.425 17 16.712 16.712Q17 16.425 17 16Q17 15.575 16.712 15.287Q16.425 15 16 15H8Q7.575 15 7.287 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM8 9H11Q11.425 9 11.713 8.712Q12 8.425 12 8Q12 7.575 11.713 7.287Q11.425 7 11 7H8Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM8 13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM5 5V8Q5 8.425 5 8.712Q5 9 5 9V5V8Q5 8.425 5 8.712Q5 9 5 9V19Z"/>
    </Icon>
  );
});

IconMaterialFeedRounded.displayName = 'AmauiIconMaterialFeedRounded';

export default IconMaterialFeedRounded;
