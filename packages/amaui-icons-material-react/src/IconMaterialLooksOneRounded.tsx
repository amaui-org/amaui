import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneRounded'
      short_name='LooksOne'

      {...props}
    >
      <path d="M13 17Q13.425 17 13.713 16.712Q14 16.425 14 16V8Q14 7.575 13.713 7.287Q13.425 7 13 7H10.975Q10.55 7 10.275 7.287Q10 7.575 10 8Q10 8.425 10.288 8.712Q10.575 9 11 9H12V16.025Q12 16.45 12.288 16.725Q12.575 17 13 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialLooksOneRounded.displayName = 'AmauiIconMaterialLooksOneRounded';

export default IconMaterialLooksOneRounded;
