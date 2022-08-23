import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid3x3Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Rounded'
      short_name='Grid3x3'

      {...props}
    >
      <path d="M9 20Q8.575 20 8.288 19.712Q8 19.425 8 19V16H5Q4.575 16 4.287 15.712Q4 15.425 4 15Q4 14.575 4.287 14.287Q4.575 14 5 14H8V10H5Q4.575 10 4.287 9.712Q4 9.425 4 9Q4 8.575 4.287 8.287Q4.575 8 5 8H8V5Q8 4.575 8.288 4.287Q8.575 4 9 4Q9.425 4 9.713 4.287Q10 4.575 10 5V8H14V5Q14 4.575 14.288 4.287Q14.575 4 15 4Q15.425 4 15.713 4.287Q16 4.575 16 5V8H19Q19.425 8 19.712 8.287Q20 8.575 20 9Q20 9.425 19.712 9.712Q19.425 10 19 10H16V14H19Q19.425 14 19.712 14.287Q20 14.575 20 15Q20 15.425 19.712 15.712Q19.425 16 19 16H16V19Q16 19.425 15.713 19.712Q15.425 20 15 20Q14.575 20 14.288 19.712Q14 19.425 14 19V16H10V19Q10 19.425 9.713 19.712Q9.425 20 9 20ZM10 14H14V10H10Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3Rounded.displayName = 'AmauiIconMaterialGrid3x3Rounded';

export default IconMaterialGrid3x3Rounded;
