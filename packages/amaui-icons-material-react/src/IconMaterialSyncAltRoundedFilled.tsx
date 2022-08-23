import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltRoundedFilled'
      short_name='SyncAlt'

      {...props}
    >
      <path d="M16.3 12.3Q16 12 16 11.587Q16 11.175 16.275 10.9L18.175 9H4Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H18.175L16.275 5.1Q16 4.825 16 4.412Q16 4 16.3 3.7Q16.575 3.425 17 3.425Q17.425 3.425 17.7 3.7L21.3 7.3Q21.45 7.45 21.513 7.625Q21.575 7.8 21.575 8Q21.575 8.2 21.513 8.375Q21.45 8.55 21.3 8.7L17.7 12.3Q17.4 12.6 16.988 12.587Q16.575 12.575 16.3 12.3ZM6.3 20.3 2.7 16.7Q2.55 16.55 2.488 16.375Q2.425 16.2 2.425 16Q2.425 15.8 2.488 15.625Q2.55 15.45 2.7 15.3L6.3 11.7Q6.575 11.425 6.988 11.412Q7.4 11.4 7.7 11.7Q8 11.975 8.012 12.387Q8.025 12.8 7.725 13.1L5.825 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17H5.825L7.725 18.9Q8 19.175 8.012 19.6Q8.025 20.025 7.725 20.3Q7.45 20.6 7.025 20.6Q6.6 20.6 6.3 20.3Z"/>
    </Icon>
  );
});

IconMaterialSyncAltRoundedFilled.displayName = 'AmauiIconMaterialSyncAltRoundedFilled';

export default IconMaterialSyncAltRoundedFilled;
