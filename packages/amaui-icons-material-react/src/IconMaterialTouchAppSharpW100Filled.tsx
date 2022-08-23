import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTouchAppSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppSharpW100Filled'
      short_name='TouchApp'

      {...props}
    >
      <path d="M9.95 9.325Q9 8.825 8.4 8.037Q7.8 7.25 7.8 6.15Q7.8 4.575 8.863 3.437Q9.925 2.3 11.5 2.3Q13.075 2.3 14.138 3.437Q15.2 4.575 15.2 6.15Q15.2 7.25 14.588 8.075Q13.975 8.9 13.05 9.325V6.15Q13.05 5.475 12.613 5.037Q12.175 4.6 11.5 4.6Q10.825 4.6 10.388 5.037Q9.95 5.475 9.95 6.15ZM10.625 20.7 5.75 16.25 6.225 15.725 10.65 16.6V6.15Q10.65 5.8 10.9 5.55Q11.15 5.3 11.5 5.3Q11.85 5.3 12.1 5.55Q12.35 5.8 12.35 6.15V12.15H13.9L18.325 14.275L17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialTouchAppSharpW100Filled.displayName = 'AmauiIconMaterialTouchAppSharpW100Filled';

export default IconMaterialTouchAppSharpW100Filled;
