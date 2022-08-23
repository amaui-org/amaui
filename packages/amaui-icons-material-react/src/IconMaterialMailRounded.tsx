import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailRounded'
      short_name='Mail'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM20 8 12.525 12.675Q12.4 12.75 12.262 12.787Q12.125 12.825 12 12.825Q11.875 12.825 11.738 12.787Q11.6 12.75 11.475 12.675L4 8V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18ZM12 11 20 6H4ZM4 8V8.25Q4 8.125 4 7.938Q4 7.75 4 7.525Q4 7.025 4 6.775Q4 6.525 4 6.8V6V6.8Q4 6.525 4 6.787Q4 7.05 4 7.525Q4 7.775 4 7.962Q4 8.15 4 8.25V8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialMailRounded.displayName = 'AmauiIconMaterialMailRounded';

export default IconMaterialMailRounded;
