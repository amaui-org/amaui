import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOneOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOnSharpFilled'
      short_name='RepeatOneOn'

      {...props}
    >
      <path d="M11.5 15H13V9H10V10.5H11.5ZM3 23Q2.175 23 1.588 22.413Q1 21.825 1 21V3Q1 2.175 1.588 1.587Q2.175 1 3 1H21Q21.825 1 22.413 1.587Q23 2.175 23 3V21Q23 21.825 22.413 22.413Q21.825 23 21 23ZM7 22 8.4 20.55 6.85 19H19V13H17V17H6.85L8.4 15.45L7 14L3 18ZM5 11H7V7H17.15L15.6 8.55L17 10L21 6L17 2L15.6 3.45L17.15 5H5Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneOnSharpFilled.displayName = 'AmauiIconMaterialRepeatOneOnSharpFilled';

export default IconMaterialRepeatOneOnSharpFilled;
