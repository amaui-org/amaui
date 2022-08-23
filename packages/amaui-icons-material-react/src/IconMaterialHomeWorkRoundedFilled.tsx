import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkRoundedFilled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V12.025Q1 11.525 1.225 11.1Q1.45 10.675 1.85 10.4L6.85 6.825Q7.35 6.45 8 6.45Q8.65 6.45 9.15 6.825L14.15 10.4Q14.55 10.675 14.775 11.1Q15 11.525 15 12.025V19Q15 19.825 14.413 20.413Q13.825 21 13 21ZM17 21V11.025Q17 10.525 16.788 10.1Q16.575 9.675 16.175 9.4L10 4.95Q10 4.15 10.588 3.575Q11.175 3 12 3H21Q21.825 3 22.413 3.587Q23 4.175 23 5V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM6 19H10V14H6ZM17 17H19V15H17ZM17 13H19V11H17ZM17 9H19V7H17Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkRoundedFilled.displayName = 'AmauiIconMaterialHomeWorkRoundedFilled';

export default IconMaterialHomeWorkRoundedFilled;
