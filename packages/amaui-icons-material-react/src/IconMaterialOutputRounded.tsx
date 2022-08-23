import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputRounded'
      short_name='Output'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V6Q21 6.425 20.712 6.713Q20.425 7 20 7Q19.575 7 19.288 6.713Q19 6.425 19 6V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V18Q19 17.575 19.288 17.288Q19.575 17 20 17Q20.425 17 20.712 17.288Q21 17.575 21 18V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM18.175 13H10Q9.575 13 9.288 12.712Q9 12.425 9 12Q9 11.575 9.288 11.287Q9.575 11 10 11H18.175L16.3 9.1Q16.025 8.825 16.013 8.412Q16 8 16.3 7.7Q16.575 7.425 17 7.425Q17.425 7.425 17.7 7.7L21.3 11.3Q21.6 11.6 21.6 12Q21.6 12.4 21.3 12.7L17.7 16.3Q17.425 16.575 17.013 16.587Q16.6 16.6 16.3 16.3Q16.025 16.025 16.025 15.6Q16.025 15.175 16.3 14.9Z"/>
    </Icon>
  );
});

IconMaterialOutputRounded.displayName = 'AmauiIconMaterialOutputRounded';

export default IconMaterialOutputRounded;
