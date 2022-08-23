import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageSharpW100Filled'
      short_name='FindInPage'

      {...props}
    >
      <path d="M5.3 20.7V3.3H14.4L18.7 8.45V19.25L14.15 14.65Q14.425 14.275 14.562 13.887Q14.7 13.5 14.7 13Q14.7 11.875 13.913 11.087Q13.125 10.3 12 10.3Q10.875 10.3 10.088 11.087Q9.3 11.875 9.3 13Q9.3 14.125 10.088 14.912Q10.875 15.7 12 15.7Q12.45 15.7 12.838 15.575Q13.225 15.45 13.65 15.15L18.7 20.2V20.7ZM12 15Q11.175 15 10.588 14.412Q10 13.825 10 13Q10 12.175 10.588 11.587Q11.175 11 12 11Q12.825 11 13.413 11.587Q14 12.175 14 13Q14 13.825 13.413 14.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialFindInPageSharpW100Filled.displayName = 'AmauiIconMaterialFindInPageSharpW100Filled';

export default IconMaterialFindInPageSharpW100Filled;
