import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechSharpW100Filled'
      short_name='MilitaryTech'

      {...props}
    >
      <path d="M9.85 19.9 10.7 17.25 8.55 15.75H11.15L11.9 13.35L7.5 10.8V2.75H16.5V10.675L12.1 13.35L12.85 15.75H15.45L13.3 17.25L14.15 19.9L12 18.25ZM12 12.6 12.35 12.4V3.45H11.65V12.4Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechSharpW100Filled.displayName = 'AmauiIconMaterialMilitaryTechSharpW100Filled';

export default IconMaterialMilitaryTechSharpW100Filled;
