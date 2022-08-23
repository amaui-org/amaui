import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxRoundedW100Filled'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M4.8 20.7Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V10.8Q3.3 10.15 3.725 9.725Q4.15 9.3 4.8 9.3H6.8V3.4Q6.8 3.075 7.013 2.862Q7.225 2.65 7.55 2.65H12.1Q12.425 2.65 12.638 2.862Q12.85 3.075 12.85 3.4V4.6Q12.85 4.925 12.638 5.137Q12.425 5.35 12.1 5.35H7.5V13Q7.5 13.425 7.788 13.712Q8.075 14 8.5 14Q8.925 14 9.213 13.712Q9.5 13.425 9.5 13V9.3H19.2Q19.85 9.3 20.275 9.725Q20.7 10.15 20.7 10.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxRoundedW100Filled.displayName = 'AmauiIconMaterialMarkunreadMailboxRoundedW100Filled';

export default IconMaterialMarkunreadMailboxRoundedW100Filled;
