import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatBoldSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldSharpW100'
      short_name='FormatBold'

      {...props}
    >
      <path d="M8.4 17.05V5H12.2Q13.625 5 14.613 5.838Q15.6 6.675 15.6 8.1Q15.6 9.125 15.075 9.812Q14.55 10.5 13.8 10.8Q14.75 11.025 15.375 11.812Q16 12.6 16 13.775Q16 15.35 14.988 16.2Q13.975 17.05 12.4 17.05ZM9.15 10.5H12.175Q13.375 10.5 14.088 9.863Q14.8 9.225 14.8 8.1Q14.8 6.975 14.088 6.337Q13.375 5.7 12.175 5.7H9.15ZM9.15 16.35H12.35Q13.6 16.35 14.4 15.725Q15.2 15.1 15.2 13.775Q15.2 12.45 14.4 11.825Q13.6 11.2 12.35 11.2H9.15Z"/>
    </Icon>
  );
});

IconMaterialFormatBoldSharpW100.displayName = 'AmauiIconMaterialFormatBoldSharpW100';

export default IconMaterialFormatBoldSharpW100;
