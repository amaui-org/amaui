import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSystemUpdateRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateRoundedFilled'
      short_name='SystemUpdate'

      {...props}
    >
      <path d="M12 15.575Q11.8 15.575 11.625 15.512Q11.45 15.45 11.3 15.3L8.7 12.7Q8.425 12.425 8.413 12.012Q8.4 11.6 8.7 11.3Q8.975 11.025 9.387 11.012Q9.8 11 10.1 11.275L11 12.15V9Q11 8.575 11.288 8.287Q11.575 8 12 8Q12.425 8 12.713 8.287Q13 8.575 13 9V12.15L13.9 11.275Q14.175 11 14.588 11Q15 11 15.3 11.3Q15.575 11.575 15.575 12Q15.575 12.425 15.3 12.7L12.7 15.3Q12.55 15.45 12.375 15.512Q12.2 15.575 12 15.575ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateRoundedFilled.displayName = 'AmauiIconMaterialSystemUpdateRoundedFilled';

export default IconMaterialSystemUpdateRoundedFilled;
