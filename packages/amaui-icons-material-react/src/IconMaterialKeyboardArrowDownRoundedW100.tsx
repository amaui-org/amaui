import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownRoundedW100'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 14.2Q11.875 14.2 11.738 14.15Q11.6 14.1 11.475 13.975L7.15 9.65Q7.025 9.525 7.025 9.4Q7.025 9.275 7.15 9.15Q7.275 9.025 7.4 9.025Q7.525 9.025 7.65 9.15L12 13.5L16.35 9.15Q16.475 9.025 16.6 9.025Q16.725 9.025 16.85 9.15Q16.975 9.275 16.975 9.4Q16.975 9.525 16.85 9.65L12.525 13.975Q12.4 14.1 12.275 14.15Q12.15 14.2 12 14.2Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownRoundedW100.displayName = 'AmauiIconMaterialKeyboardArrowDownRoundedW100';

export default IconMaterialKeyboardArrowDownRoundedW100;
