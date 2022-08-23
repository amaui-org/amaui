import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingRounded'
      short_name='Padding'

      {...props}
    >
      <path d="M8 9Q8.425 9 8.713 8.712Q9 8.425 9 8Q9 7.575 8.713 7.287Q8.425 7 8 7Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM16 9Q16.425 9 16.712 8.712Q17 8.425 17 8Q17 7.575 16.712 7.287Q16.425 7 16 7Q15.575 7 15.288 7.287Q15 7.575 15 8Q15 8.425 15.288 8.712Q15.575 9 16 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialPaddingRounded.displayName = 'AmauiIconMaterialPaddingRounded';

export default IconMaterialPaddingRounded;
