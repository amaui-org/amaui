import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoRoundedFilled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M10 17H14.025Q14.45 17 14.725 16.712Q15 16.425 15 16Q15 15.575 14.713 15.287Q14.425 15 14 15H11V13Q11 13 11 13Q11 13 11 13H13Q13.825 13 14.413 12.412Q15 11.825 15 11V9Q15 8.175 14.413 7.587Q13.825 7 13 7H9.975Q9.55 7 9.275 7.287Q9 7.575 9 8Q9 8.425 9.288 8.712Q9.575 9 10 9H13Q13 9 13 9Q13 9 13 9V11Q13 11 13 11Q13 11 13 11H11Q10.175 11 9.588 11.587Q9 12.175 9 13V16Q9 16.425 9.288 16.712Q9.575 17 10 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoRoundedFilled.displayName = 'AmauiIconMaterialLooksTwoRoundedFilled';

export default IconMaterialLooksTwoRoundedFilled;
