import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFormatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatRoundedW100Filled'
      short_name='TextFormat'

      {...props}
    >
      <path d="M6 18.4Q5.85 18.4 5.75 18.3Q5.65 18.2 5.65 18.05Q5.65 17.9 5.75 17.8Q5.85 17.7 6 17.7H18Q18.15 17.7 18.25 17.8Q18.35 17.9 18.35 18.05Q18.35 18.2 18.25 18.3Q18.15 18.4 18 18.4ZM9.875 11.2H14.075L12.075 5.7H11.975ZM8.35 14.7Q8.125 14.7 8.037 14.562Q7.95 14.425 8.025 14.225L11.55 4.925Q11.6 4.8 11.738 4.7Q11.875 4.6 12.025 4.6Q12.175 4.6 12.312 4.7Q12.45 4.8 12.5 4.925L15.95 14.225Q16.025 14.425 15.925 14.562Q15.825 14.7 15.6 14.7Q15.5 14.7 15.425 14.65Q15.35 14.6 15.3 14.5L14.325 11.85H9.625L8.65 14.5Q8.6 14.6 8.525 14.65Q8.45 14.7 8.35 14.7Z"/>
    </Icon>
  );
});

IconMaterialTextFormatRoundedW100Filled.displayName = 'AmauiIconMaterialTextFormatRoundedW100Filled';

export default IconMaterialTextFormatRoundedW100Filled;
