import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDryCleaningSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningSharpW100Filled'
      short_name='DryCleaning'

      {...props}
    >
      <path d="M7.65 21.35V15.35H3.65V12.425L11.65 8.85V7.3Q10.775 7.175 10.213 6.537Q9.65 5.9 9.65 5Q9.65 4.025 10.338 3.337Q11.025 2.65 12 2.65Q12.975 2.65 13.663 3.337Q14.35 4.025 14.35 5H13.6Q13.6 4.325 13.138 3.837Q12.675 3.35 12 3.35Q11.325 3.35 10.838 3.837Q10.35 4.325 10.35 5Q10.35 5.675 10.838 6.162Q11.325 6.65 12 6.65H12.35V8.85L20.35 12.425V15.35H16.35V21.35ZM4.35 14.65H7.65V13.65H16.35V14.65H19.65V12.875L12 9.5L4.35 12.9Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningSharpW100Filled.displayName = 'AmauiIconMaterialDryCleaningSharpW100Filled';

export default IconMaterialDryCleaningSharpW100Filled;
