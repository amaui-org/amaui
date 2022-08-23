import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxRounded'
      short_name='AddBox'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H13V8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13H11V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialAddBoxRounded.displayName = 'AmauiIconMaterialAddBoxRounded';

export default IconMaterialAddBoxRounded;
