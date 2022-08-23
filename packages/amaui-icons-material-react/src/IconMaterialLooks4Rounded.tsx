import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4Rounded'
      short_name='Looks4'

      {...props}
    >
      <path d="M14 17Q14.425 17 14.713 16.712Q15 16.425 15 16V7.975Q15 7.55 14.713 7.275Q14.425 7 14 7Q13.575 7 13.288 7.287Q13 7.575 13 8V11H11V7.975Q11 7.55 10.713 7.275Q10.425 7 10 7Q9.575 7 9.288 7.287Q9 7.575 9 8V12Q9 12.425 9.288 12.712Q9.575 13 10 13H13V16.025Q13 16.45 13.288 16.725Q13.575 17 14 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialLooks4Rounded.displayName = 'AmauiIconMaterialLooks4Rounded';

export default IconMaterialLooks4Rounded;
