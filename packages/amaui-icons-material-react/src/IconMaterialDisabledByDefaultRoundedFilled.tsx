import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultRoundedFilled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7.7 16.3Q7.975 16.575 8.4 16.575Q8.825 16.575 9.1 16.3L12 13.4L14.9 16.3Q15.175 16.575 15.6 16.575Q16.025 16.575 16.3 16.3Q16.575 16.025 16.575 15.6Q16.575 15.175 16.3 14.9L13.4 12L16.3 9.1Q16.575 8.825 16.575 8.4Q16.575 7.975 16.3 7.7Q16.025 7.425 15.6 7.425Q15.175 7.425 14.9 7.7L12 10.6L9.1 7.7Q8.825 7.425 8.4 7.425Q7.975 7.425 7.7 7.7Q7.425 7.975 7.425 8.4Q7.425 8.825 7.7 9.1L10.6 12L7.7 14.9Q7.425 15.175 7.425 15.6Q7.425 16.025 7.7 16.3Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultRoundedFilled.displayName = 'AmauiIconMaterialDisabledByDefaultRoundedFilled';

export default IconMaterialDisabledByDefaultRoundedFilled;
