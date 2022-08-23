import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRssFeedSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedSharpW100'
      short_name='RssFeed'

      {...props}
    >
      <path d="M5 21Q4.6 21 4.3 20.7Q4 20.4 4 20Q4 19.575 4.3 19.288Q4.6 19 5 19Q5.425 19 5.713 19.288Q6 19.575 6 20Q6 20.4 5.713 20.7Q5.425 21 5 21ZM18 21Q18 18.1 16.9 15.562Q15.8 13.025 13.888 11.112Q11.975 9.2 9.438 8.1Q6.9 7 4 7V6Q7.1 6 9.825 7.188Q12.55 8.375 14.588 10.412Q16.625 12.45 17.812 15.175Q19 17.9 19 21ZM12 21Q12 17.675 9.662 15.338Q7.325 13 4 13V12Q5.85 12 7.488 12.712Q9.125 13.425 10.35 14.65Q11.575 15.875 12.288 17.512Q13 19.15 13 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeedSharpW100.displayName = 'AmauiIconMaterialRssFeedSharpW100';

export default IconMaterialRssFeedSharpW100;
