import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRoundedW100Filled'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M12.75 16.85Q12.625 16.725 12.625 16.6Q12.625 16.475 12.75 16.35L16.75 12.35H3Q2.85 12.35 2.75 12.25Q2.65 12.15 2.65 12Q2.65 11.85 2.75 11.75Q2.85 11.65 3 11.65H16.75L12.75 7.65Q12.625 7.525 12.625 7.4Q12.625 7.275 12.75 7.15Q12.875 7.025 13 7.025Q13.125 7.025 13.25 7.15L17.575 11.475Q17.7 11.6 17.75 11.725Q17.8 11.85 17.8 12Q17.8 12.125 17.75 12.262Q17.7 12.4 17.575 12.525L13.25 16.85Q13.125 16.975 13 16.975Q12.875 16.975 12.75 16.85ZM21 17.1Q20.85 17.1 20.75 17Q20.65 16.9 20.65 16.75V7.25Q20.65 7.1 20.75 7Q20.85 6.9 21 6.9Q21.15 6.9 21.25 7Q21.35 7.1 21.35 7.25V16.75Q21.35 16.9 21.25 17Q21.15 17.1 21 17.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardTabRoundedW100Filled';

export default IconMaterialKeyboardTabRoundedW100Filled;
