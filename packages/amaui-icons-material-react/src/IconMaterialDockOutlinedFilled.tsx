import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockOutlinedFilled'
      short_name='Dock'

      {...props}
    >
      <path d="M8 19Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V17Q18 17.825 17.413 18.413Q16.825 19 16 19ZM16 6H8V14H16ZM8 23V21H16V23Z"/>
    </Icon>
  )
});

export default IconMaterialDockOutlinedFilled;
