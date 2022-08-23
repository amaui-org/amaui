import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlaySharpW100'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M7 4.65H17V3H7ZM15.9 21.7V21H17V5.35H7V12.1H6.3V2.3H17.7V21.7ZM6.3 21.7V20.5Q6.8 20.5 7.15 20.85Q7.5 21.2 7.5 21.7ZM10 21.7Q10 20.15 8.925 19.075Q7.85 18 6.3 18V17.3Q8.125 17.3 9.413 18.587Q10.7 19.875 10.7 21.7ZM13.2 21.7Q13.2 18.825 11.188 16.812Q9.175 14.8 6.3 14.8V14.1Q7.875 14.1 9.262 14.7Q10.65 15.3 11.675 16.325Q12.7 17.35 13.3 18.738Q13.9 20.125 13.9 21.7ZM7 4.65V3V4.65Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlaySharpW100.displayName = 'AmauiIconMaterialTapAndPlaySharpW100';

export default IconMaterialTapAndPlaySharpW100;
