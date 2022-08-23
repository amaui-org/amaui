import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsRoundedFilled'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M9 22Q8.575 22 8.288 21.712Q8 21.425 8 21Q8 20.575 8.288 20.288Q8.575 20 9 20H10V18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H14V20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsRoundedFilled.displayName = 'AmauiIconMaterialDesktopWindowsRoundedFilled';

export default IconMaterialDesktopWindowsRoundedFilled;
