import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningSharp'
      short_name='Dining'

      {...props}
    >
      <path d="M2 22V2H22V22ZM4 20H20V4H4ZM8 19H9.5V12.25Q10.15 12.05 10.575 11.537Q11 11.025 11 10.3V6H10V9H9.25V6H8.25V9H7.5V6H6.5V10.3Q6.5 11.025 6.925 11.537Q7.35 12.05 8 12.25ZM14 19H15.5V12.65Q16.325 12.25 16.788 11.375Q17.25 10.5 17.25 9.325Q17.25 7.9 16.538 6.95Q15.825 6 14.75 6Q13.675 6 12.963 6.95Q12.25 7.9 12.25 9.325Q12.25 10.5 12.713 11.375Q13.175 12.25 14 12.65ZM4 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialDiningSharp.displayName = 'AmauiIconMaterialDiningSharp';

export default IconMaterialDiningSharp;
