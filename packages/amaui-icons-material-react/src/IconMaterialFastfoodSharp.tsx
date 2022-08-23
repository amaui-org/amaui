import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastfoodSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodSharp'
      short_name='Fastfood'

      {...props}
    >
      <path d="M1 23V21H16V23ZM1 15Q1 13.5 1.65 12.375Q2.3 11.25 3.35 10.5Q4.4 9.75 5.75 9.375Q7.1 9 8.5 9Q9.9 9 11.25 9.375Q12.6 9.75 13.65 10.5Q14.7 11.25 15.35 12.375Q16 13.5 16 15ZM1 19V17H16V19ZM18 23V21H19.4L20.8 7H11.25L11 5H16V1H18V5H23L21.2 23ZM18 21H19.4H18Q18 21 18 21Q18 21 18 21ZM3.625 13H13.375Q12.55 11.825 11.05 11.412Q9.55 11 8.5 11Q7.45 11 5.95 11.412Q4.45 11.825 3.625 13ZM3.625 13Q4.45 13 5.95 13Q7.45 13 8.5 13Q9.55 13 11.05 13Q12.55 13 13.375 13Z"/>
    </Icon>
  );
});

IconMaterialFastfoodSharp.displayName = 'AmauiIconMaterialFastfoodSharp';

export default IconMaterialFastfoodSharp;
