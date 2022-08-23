import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsRoundedFilled'
      short_name='LaptopWindows'

      {...props}
    >
      <path d="M1 20Q0.575 20 0.288 19.712Q0 19.425 0 19Q0 18.575 0.288 18.288Q0.575 18 1 18H4V17Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V15Q22 15.825 21.413 16.413Q20.825 17 20 17V18H23Q23.425 18 23.712 18.288Q24 18.575 24 19Q24 19.425 23.712 19.712Q23.425 20 23 20Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsRoundedFilled.displayName = 'AmauiIconMaterialLaptopWindowsRoundedFilled';

export default IconMaterialLaptopWindowsRoundedFilled;
