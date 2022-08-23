import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveRounded'
      short_name='Save'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H16.175Q16.575 3 16.938 3.15Q17.3 3.3 17.575 3.575L20.425 6.425Q20.7 6.7 20.85 7.062Q21 7.425 21 7.825V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 7.85 16.15 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19ZM12 18Q13.25 18 14.125 17.125Q15 16.25 15 15Q15 13.75 14.125 12.875Q13.25 12 12 12Q10.75 12 9.875 12.875Q9 13.75 9 15Q9 16.25 9.875 17.125Q10.75 18 12 18ZM7 10H14Q14.425 10 14.713 9.712Q15 9.425 15 9V7Q15 6.575 14.713 6.287Q14.425 6 14 6H7Q6.575 6 6.287 6.287Q6 6.575 6 7V9Q6 9.425 6.287 9.712Q6.575 10 7 10ZM5 7.85V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialSaveRounded.displayName = 'AmauiIconMaterialSaveRounded';

export default IconMaterialSaveRounded;
