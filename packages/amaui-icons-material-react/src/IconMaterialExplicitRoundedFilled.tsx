import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitRoundedFilled'
      short_name='Explicit'

      {...props}
    >
      <path d="M10 17H14Q14.425 17 14.713 16.712Q15 16.425 15 16Q15 15.575 14.713 15.287Q14.425 15 14 15H11V13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H11V9H14Q14.425 9 14.713 8.712Q15 8.425 15 8Q15 7.575 14.713 7.287Q14.425 7 14 7H10Q9.575 7 9.288 7.287Q9 7.575 9 8V16Q9 16.425 9.288 16.712Q9.575 17 10 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialExplicitRoundedFilled.displayName = 'AmauiIconMaterialExplicitRoundedFilled';

export default IconMaterialExplicitRoundedFilled;
