import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClarifySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifySharpFilled'
      short_name='Clarify'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H20Q20 19 20 19Q20 19 20 19V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V19Q4 19 4 19Q4 19 4 19ZM6 9V7H13V9ZM6 13V11H13V13ZM6 17V15H13V17ZM16 17V7H18V17Z"/>
    </Icon>
  );
});

IconMaterialClarifySharpFilled.displayName = 'AmauiIconMaterialClarifySharpFilled';

export default IconMaterialClarifySharpFilled;
