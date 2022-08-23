import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageSharpW100'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM6 20H17.95V19.45L13.65 15.15Q13.225 15.45 12.838 15.575Q12.45 15.7 12 15.7Q10.875 15.7 10.088 14.912Q9.3 14.125 9.3 13Q9.3 11.875 10.088 11.087Q10.875 10.3 12 10.3Q13.125 10.3 13.913 11.087Q14.7 11.875 14.7 13Q14.7 13.5 14.562 13.887Q14.425 14.275 14.15 14.65L18 18.55V8.7L14.05 4H6ZM5.3 20.7V3.3H14.4L18.7 8.45V20.7ZM12.35 12.1Z"/>
    </Icon>
  );
});

IconMaterialFindInPageSharpW100.displayName = 'AmauiIconMaterialFindInPageSharpW100';

export default IconMaterialFindInPageSharpW100;
