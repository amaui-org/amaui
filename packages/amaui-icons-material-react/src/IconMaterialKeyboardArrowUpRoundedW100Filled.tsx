import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpRoundedW100Filled'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M7.15 14.25Q7.025 14.125 7.025 14Q7.025 13.875 7.15 13.75L11.475 9.425Q11.6 9.3 11.738 9.25Q11.875 9.2 12 9.2Q12.15 9.2 12.275 9.25Q12.4 9.3 12.525 9.425L16.85 13.75Q16.975 13.875 16.975 14Q16.975 14.125 16.85 14.25Q16.725 14.375 16.6 14.375Q16.475 14.375 16.35 14.25L12 9.9L7.65 14.25Q7.525 14.375 7.4 14.375Q7.275 14.375 7.15 14.25Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowUpRoundedW100Filled';

export default IconMaterialKeyboardArrowUpRoundedW100Filled;
