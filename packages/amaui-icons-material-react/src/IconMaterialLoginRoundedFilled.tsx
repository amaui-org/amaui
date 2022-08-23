import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginRoundedFilled'
      short_name='Login'

      {...props}
    >
      <path d="M9.325 16.275Q9.05 15.95 9.05 15.537Q9.05 15.125 9.325 14.85L11.175 13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H11.175L9.325 9.15Q9.025 8.85 9.025 8.438Q9.025 8.025 9.325 7.725Q9.6 7.425 10.013 7.425Q10.425 7.425 10.7 7.7L14.3 11.3Q14.45 11.45 14.513 11.625Q14.575 11.8 14.575 12Q14.575 12.2 14.513 12.375Q14.45 12.55 14.3 12.7L10.7 16.3Q10.4 16.6 10 16.575Q9.6 16.55 9.325 16.275ZM13 21Q12.575 21 12.288 20.712Q12 20.425 12 20Q12 19.575 12.288 19.288Q12.575 19 13 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H13Q12.575 5 12.288 4.712Q12 4.425 12 4Q12 3.575 12.288 3.287Q12.575 3 13 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLoginRoundedFilled.displayName = 'AmauiIconMaterialLoginRoundedFilled';

export default IconMaterialLoginRoundedFilled;
