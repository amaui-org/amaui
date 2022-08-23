import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchAccountSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountSharp'
      short_name='SwitchAccount'

      {...props}
    >
      <path d="M14 11Q15.25 11 16.125 10.125Q17 9.25 17 8Q17 6.75 16.125 5.875Q15.25 5 14 5Q12.75 5 11.875 5.875Q11 6.75 11 8Q11 9.25 11.875 10.125Q12.75 11 14 11ZM8 15.75Q9.1 14.475 10.65 13.738Q12.2 13 14 13Q15.8 13 17.35 13.738Q18.9 14.475 20 15.75V4H8ZM6 18V2H22V18ZM2 22V6H4V20H18V22ZM14 9Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7Q14.425 7 14.713 7.287Q15 7.575 15 8Q15 8.425 14.713 8.712Q14.425 9 14 9ZM10.7 16H17.3Q16.575 15.5 15.738 15.25Q14.9 15 14 15Q13.1 15 12.263 15.25Q11.425 15.5 10.7 16ZM14 9.875Q14 9.875 14 9.875Q14 9.875 14 9.875Q14 9.875 14 9.875Q14 9.875 14 9.875Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountSharp.displayName = 'AmauiIconMaterialSwitchAccountSharp';

export default IconMaterialSwitchAccountSharp;
