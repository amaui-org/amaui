import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteForeverRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverRounded'
      short_name='DeleteForever'

      {...props}
    >
      <path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9 3.575 9.288 3.287Q9.575 3 10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM7 6V19Q7 19 7 19Q7 19 7 19H17Q17 19 17 19Q17 19 17 19V6ZM7 6V19Q7 19 7 19Q7 19 7 19Q7 19 7 19Q7 19 7 19V6ZM12 13.9 13.9 15.8Q14.2 16.075 14.613 16.075Q15.025 16.075 15.3 15.8Q15.6 15.5 15.6 15.087Q15.6 14.675 15.3 14.4L13.4 12.5L15.3 10.6Q15.6 10.3 15.6 9.887Q15.6 9.475 15.3 9.2Q15.025 8.9 14.613 8.9Q14.2 8.9 13.9 9.2L12 11.1L10.1 9.2Q9.825 8.9 9.413 8.9Q9 8.9 8.7 9.2Q8.425 9.475 8.425 9.887Q8.425 10.3 8.7 10.6L10.6 12.5L8.7 14.4Q8.425 14.675 8.425 15.087Q8.425 15.5 8.7 15.8Q9 16.075 9.413 16.075Q9.825 16.075 10.1 15.8Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverRounded.displayName = 'AmauiIconMaterialDeleteForeverRounded';

export default IconMaterialDeleteForeverRounded;
