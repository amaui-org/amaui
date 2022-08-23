import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailRoundedFilled'
      short_name='Mail'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM12 12.825Q12.125 12.825 12.262 12.787Q12.4 12.75 12.525 12.675L19.6 8.25Q19.8 8.125 19.9 7.938Q20 7.75 20 7.525Q20 7.025 19.575 6.775Q19.15 6.525 18.7 6.8L12 11L5.3 6.8Q4.85 6.525 4.425 6.787Q4 7.05 4 7.525Q4 7.775 4.1 7.962Q4.2 8.15 4.4 8.25L11.475 12.675Q11.6 12.75 11.738 12.787Q11.875 12.825 12 12.825Z"/>
    </Icon>
  );
});

IconMaterialMailRoundedFilled.displayName = 'AmauiIconMaterialMailRoundedFilled';

export default IconMaterialMailRoundedFilled;
