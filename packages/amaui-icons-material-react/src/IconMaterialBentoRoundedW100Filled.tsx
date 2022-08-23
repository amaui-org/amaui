import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoRoundedW100Filled'
      short_name='Bento'

      {...props}
    >
      <path d="M13.8 11.65V6.15H19.35Q20 6.15 20.425 6.575Q20.85 7 20.85 7.65V11.65ZM4.65 17.85Q4 17.85 3.575 17.425Q3.15 17 3.15 16.35V7.65Q3.15 7 3.575 6.575Q4 6.15 4.65 6.15H13.1V17.85ZM8.125 12.9Q8.5 12.9 8.762 12.637Q9.025 12.375 9.025 12Q9.025 11.625 8.762 11.363Q8.5 11.1 8.125 11.1Q7.75 11.1 7.488 11.363Q7.225 11.625 7.225 12Q7.225 12.375 7.488 12.637Q7.75 12.9 8.125 12.9ZM13.8 17.85V12.35H20.85V16.35Q20.85 17 20.425 17.425Q20 17.85 19.35 17.85Z"/>
    </Icon>
  );
});

IconMaterialBentoRoundedW100Filled.displayName = 'AmauiIconMaterialBentoRoundedW100Filled';

export default IconMaterialBentoRoundedW100Filled;
