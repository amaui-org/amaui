import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharpW100Filled'
      short_name='Bento'

      {...props}
    >
      <path d="M13.8 11.65V6.15H20.85V11.65ZM3.15 17.85V6.15H13.1V17.85ZM8.125 12.9Q8.5 12.9 8.762 12.637Q9.025 12.375 9.025 12Q9.025 11.625 8.762 11.363Q8.5 11.1 8.125 11.1Q7.75 11.1 7.488 11.363Q7.225 11.625 7.225 12Q7.225 12.375 7.488 12.637Q7.75 12.9 8.125 12.9ZM13.8 17.85V12.35H20.85V17.85Z"/>
    </Icon>
  );
});

IconMaterialBentoSharpW100Filled.displayName = 'AmauiIconMaterialBentoSharpW100Filled';

export default IconMaterialBentoSharpW100Filled;
