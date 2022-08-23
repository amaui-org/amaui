import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingSharpW100Filled'
      short_name='Grading'

      {...props}
    >
      <path d="M3.65 8.65V7.95H20.35V8.65ZM3.65 12.35V11.65H20.35V12.35ZM3.65 16.05V15.35H11.35V16.05ZM3.65 19.75V19.05H11.35V19.75ZM16.425 19.475 14.5 17.55 14.975 17.075 16.4 18.5 19.6 15.3 20.1 15.8ZM3.65 4.95V4.25H20.35V4.95Z"/>
    </Icon>
  );
});

IconMaterialGradingSharpW100Filled.displayName = 'AmauiIconMaterialGradingSharpW100Filled';

export default IconMaterialGradingSharpW100Filled;
