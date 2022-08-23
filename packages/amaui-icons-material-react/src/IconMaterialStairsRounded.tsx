import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsRounded'
      short_name='Stairs'

      {...props}
    >
      <path d="M7 18H10.425V14.675H13V11.35H15.575V8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H13.575V9.325H11V12.65H8.425V16H7Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialStairsRounded.displayName = 'AmauiIconMaterialStairsRounded';

export default IconMaterialStairsRounded;
