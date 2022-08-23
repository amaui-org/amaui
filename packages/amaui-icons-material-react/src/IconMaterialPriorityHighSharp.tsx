import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityHighSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighSharp'
      short_name='PriorityHigh'

      {...props}
    >
      <path d="M12 21Q11.175 21 10.588 20.413Q10 19.825 10 19Q10 18.175 10.588 17.587Q11.175 17 12 17Q12.825 17 13.413 17.587Q14 18.175 14 19Q14 19.825 13.413 20.413Q12.825 21 12 21ZM10 15V3H14V15Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighSharp.displayName = 'AmauiIconMaterialPriorityHighSharp';

export default IconMaterialPriorityHighSharp;
