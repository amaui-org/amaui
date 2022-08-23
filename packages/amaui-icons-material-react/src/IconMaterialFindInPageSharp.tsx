import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageSharp'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM6 20H17.6L14.025 16.425Q13.6 16.7 13.088 16.85Q12.575 17 12 17Q10.35 17 9.175 15.825Q8 14.65 8 13Q8 11.35 9.175 10.175Q10.35 9 12 9Q13.65 9 14.825 10.175Q16 11.35 16 13Q16 13.575 15.85 14.075Q15.7 14.575 15.425 15L18 17.575V8.725L14.05 4H6ZM4 22V2H15L20 8V22ZM13 13Z"/>
    </Icon>
  );
});

IconMaterialFindInPageSharp.displayName = 'AmauiIconMaterialFindInPageSharp';

export default IconMaterialFindInPageSharp;
