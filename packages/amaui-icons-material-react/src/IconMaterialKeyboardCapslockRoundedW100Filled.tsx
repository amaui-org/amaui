import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockRoundedW100Filled'
      short_name='KeyboardCapslock'

      {...props}
    >
      <path d="M7.15 11.85Q7.025 11.725 7.025 11.6Q7.025 11.475 7.15 11.35L11.475 7.025Q11.6 6.9 11.738 6.85Q11.875 6.8 12 6.8Q12.15 6.8 12.275 6.85Q12.4 6.9 12.525 7.025L16.85 11.35Q16.975 11.475 16.975 11.6Q16.975 11.725 16.85 11.85Q16.725 11.975 16.6 11.975Q16.475 11.975 16.35 11.85L12 7.5L7.65 11.85Q7.525 11.975 7.4 11.975Q7.275 11.975 7.15 11.85ZM7 17.35Q6.85 17.35 6.75 17.25Q6.65 17.15 6.65 17Q6.65 16.85 6.75 16.75Q6.85 16.65 7 16.65H17Q17.15 16.65 17.25 16.75Q17.35 16.85 17.35 17Q17.35 17.15 17.25 17.25Q17.15 17.35 17 17.35Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardCapslockRoundedW100Filled';

export default IconMaterialKeyboardCapslockRoundedW100Filled;
