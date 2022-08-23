import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifiBadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBadRounded'
      short_name='SignalWifiBad'

      {...props}
    >
      <path d="M12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 8.987Q0.425 8.575 0.725 8.3Q3.05 6.2 5.95 5.1Q8.85 4 12 4Q15.15 4 18.05 5.1Q20.95 6.2 23.275 8.3Q23.575 8.575 23.588 8.987Q23.6 9.4 23.3 9.7L21 12H14Q13.175 12 12.588 12.587Q12 13.175 12 14ZM14.7 20.3Q14.425 20.025 14.425 19.6Q14.425 19.175 14.7 18.9L16.1 17.5L14.7 16.1Q14.425 15.825 14.425 15.4Q14.425 14.975 14.7 14.7Q14.975 14.425 15.4 14.425Q15.825 14.425 16.1 14.7L17.5 16.1L18.9 14.7Q19.175 14.425 19.6 14.425Q20.025 14.425 20.3 14.7Q20.575 14.975 20.575 15.4Q20.575 15.825 20.3 16.1L18.9 17.5L20.3 18.9Q20.575 19.175 20.575 19.6Q20.575 20.025 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3L17.5 18.9L16.1 20.3Q15.825 20.575 15.4 20.575Q14.975 20.575 14.7 20.3Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBadRounded.displayName = 'AmauiIconMaterialSignalWifiBadRounded';

export default IconMaterialSignalWifiBadRounded;
