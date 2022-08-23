import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityHighRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighRounded'
      short_name='PriorityHigh'

      {...props}
    >
      <path d="M12 21Q11.175 21 10.588 20.413Q10 19.825 10 19Q10 18.175 10.588 17.587Q11.175 17 12 17Q12.825 17 13.413 17.587Q14 18.175 14 19Q14 19.825 13.413 20.413Q12.825 21 12 21ZM12 15Q11.175 15 10.588 14.412Q10 13.825 10 13V5Q10 4.175 10.588 3.587Q11.175 3 12 3Q12.825 3 13.413 3.587Q14 4.175 14 5V13Q14 13.825 13.413 14.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighRounded.displayName = 'AmauiIconMaterialPriorityHighRounded';

export default IconMaterialPriorityHighRounded;
