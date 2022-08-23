import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatBoldRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldRoundedW100'
      short_name='FormatBold'

      {...props}
    >
      <path d="M9.1 17.05Q8.825 17.05 8.613 16.837Q8.4 16.625 8.4 16.35V5.7Q8.4 5.425 8.613 5.213Q8.825 5 9.1 5H12.2Q13.625 5 14.613 5.838Q15.6 6.675 15.6 8.1Q15.6 9.125 15.075 9.812Q14.55 10.5 13.8 10.8Q14.75 11.025 15.375 11.812Q16 12.6 16 13.775Q16 15.35 14.988 16.2Q13.975 17.05 12.4 17.05ZM9.15 10.5H12.175Q13.375 10.5 14.088 9.863Q14.8 9.225 14.8 8.1Q14.8 6.975 14.088 6.337Q13.375 5.7 12.175 5.7H9.15ZM9.15 16.35H12.35Q13.6 16.35 14.4 15.725Q15.2 15.1 15.2 13.775Q15.2 12.45 14.4 11.825Q13.6 11.2 12.35 11.2H9.15Z"/>
    </Icon>
  );
});

IconMaterialFormatBoldRoundedW100.displayName = 'AmauiIconMaterialFormatBoldRoundedW100';

export default IconMaterialFormatBoldRoundedW100;
