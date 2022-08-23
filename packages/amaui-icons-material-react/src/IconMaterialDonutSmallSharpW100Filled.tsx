import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDonutSmallSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallSharpW100Filled'
      short_name='DonutSmall'

      {...props}
    >
      <path d="M14.475 11.1Q14.25 10.55 13.838 10.15Q13.425 9.75 12.875 9.55V3.35Q16 3.65 18.188 5.812Q20.375 7.975 20.675 11.1ZM11.175 20.65Q7.825 20.3 5.575 17.837Q3.325 15.375 3.325 12Q3.325 8.625 5.575 6.137Q7.825 3.65 11.175 3.35V9.55Q10.375 9.825 9.9 10.5Q9.425 11.175 9.425 12Q9.425 12.825 9.913 13.475Q10.4 14.125 11.175 14.4ZM12.875 20.65V14.4Q13.45 14.2 13.85 13.8Q14.25 13.4 14.475 12.85H20.675Q20.375 15.975 18.188 18.163Q16 20.35 12.875 20.65Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallSharpW100Filled.displayName = 'AmauiIconMaterialDonutSmallSharpW100Filled';

export default IconMaterialDonutSmallSharpW100Filled;
