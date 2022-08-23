import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeSharpW100Filled'
      short_name='Nightlife'

      {...props}
    >
      <path d="M4.85 19.35V18.65H6.85V12.9L2.45 6.3H11.95L7.55 12.9V18.65H9.55V19.35ZM5.1 9H9.3L10.65 7H3.75ZM15.2 19.35Q14.225 19.35 13.538 18.663Q12.85 17.975 12.85 17Q12.85 16.025 13.538 15.337Q14.225 14.65 15.2 14.65Q15.625 14.65 16.025 14.812Q16.425 14.975 16.85 15.35V6.3H20.55V7.7H17.55V17Q17.55 17.975 16.863 18.663Q16.175 19.35 15.2 19.35Z"/>
    </Icon>
  );
});

IconMaterialNightlifeSharpW100Filled.displayName = 'AmauiIconMaterialNightlifeSharpW100Filled';

export default IconMaterialNightlifeSharpW100Filled;
