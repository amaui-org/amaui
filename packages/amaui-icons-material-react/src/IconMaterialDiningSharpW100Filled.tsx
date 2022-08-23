import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiningSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningSharpW100Filled'
      short_name='Dining'

      {...props}
    >
      <path d="M3.3 20.7V3.3H20.7V20.7ZM8.4 18.6H9.1V12.2Q9.825 12.075 10.312 11.562Q10.8 11.05 10.8 10.3V6.4H10.1V10.15H9.1V6.4H8.4V10.15H7.4V6.4H6.7V10.3Q6.7 11.05 7.188 11.562Q7.675 12.075 8.4 12.2ZM14.4 18.6H15.1V12.4Q15.9 12.125 16.375 11.325Q16.85 10.525 16.85 9.4Q16.85 8.1 16.25 7.25Q15.65 6.4 14.75 6.4Q13.85 6.4 13.25 7.25Q12.65 8.1 12.65 9.4Q12.65 10.525 13.125 11.325Q13.6 12.125 14.4 12.4Z"/>
    </Icon>
  );
});

IconMaterialDiningSharpW100Filled.displayName = 'AmauiIconMaterialDiningSharpW100Filled';

export default IconMaterialDiningSharpW100Filled;
