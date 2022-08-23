import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorRoundedFilled'
      short_name='RemoveModerator'

      {...props}
    >
      <path d="M18.85 16.05 6.8 3.95 11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 12.375 19.712 13.625Q19.425 14.875 18.85 16.05ZM19.1 21.9 16.55 19.35Q15.75 20.2 14.775 20.8Q13.8 21.4 12.725 21.775Q12.575 21.825 12.388 21.85Q12.2 21.875 12 21.875Q11.8 21.875 11.613 21.863Q11.425 21.85 11.275 21.8Q8.075 20.725 6.038 17.712Q4 14.7 4 11.1V6.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorRoundedFilled.displayName = 'AmauiIconMaterialRemoveModeratorRoundedFilled';

export default IconMaterialRemoveModeratorRoundedFilled;
