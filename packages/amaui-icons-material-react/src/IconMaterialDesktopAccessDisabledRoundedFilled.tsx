import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledRoundedFilled'
      short_name='DesktopAccessDisabled'

      {...props}
    >
      <path d="M20.7 17.85 5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.625 21.638 17.125Q21.275 17.625 20.7 17.85ZM19.8 22.6 15.15 18H14V20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22H9Q8.575 22 8.288 21.712Q8 21.425 8 21Q8 20.575 8.288 20.288Q8.575 20 9 20H10V18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.85L1.375 4.2Q1.1 3.9 1.1 3.5Q1.1 3.1 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.488 21.888Q21.5 22.3 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledRoundedFilled.displayName = 'AmauiIconMaterialDesktopAccessDisabledRoundedFilled';

export default IconMaterialDesktopAccessDisabledRoundedFilled;
