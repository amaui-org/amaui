import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastfoodSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodSharpFilled'
      short_name='Fastfood'

      {...props}
    >
      <path d="M1 23V21H16V23ZM1 15Q1 13.5 1.65 12.375Q2.3 11.25 3.35 10.5Q4.4 9.75 5.75 9.375Q7.1 9 8.5 9Q9.9 9 11.25 9.375Q12.6 9.75 13.65 10.5Q14.7 11.25 15.35 12.375Q16 13.5 16 15ZM1 19V17H16V19ZM18 23V15Q18 12.125 16.238 10.113Q14.475 8.1 11.275 7.3L11 5H16V1H18V5H23L21.2 23Z"/>
    </Icon>
  );
});

IconMaterialFastfoodSharpFilled.displayName = 'AmauiIconMaterialFastfoodSharpFilled';

export default IconMaterialFastfoodSharpFilled;
