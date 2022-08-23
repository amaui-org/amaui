import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockRoundedFilled'
      short_name='Dock'

      {...props}
    >
      <path d="M9 23Q8.575 23 8.288 22.712Q8 22.425 8 22Q8 21.575 8.288 21.288Q8.575 21 9 21H15Q15.425 21 15.713 21.288Q16 21.575 16 22Q16 22.425 15.713 22.712Q15.425 23 15 23ZM8 19Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V17Q18 17.825 17.413 18.413Q16.825 19 16 19ZM8 14H16V6H8Z"/>
    </Icon>
  );
});

IconMaterialDockRoundedFilled.displayName = 'AmauiIconMaterialDockRoundedFilled';

export default IconMaterialDockRoundedFilled;
