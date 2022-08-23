import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRssFeedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedRoundedW100Filled'
      short_name='RssFeed'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19Q5.425 19 5.713 19.288Q6 19.575 6 20Q6 20.425 5.713 20.712Q5.425 21 5 21ZM18.5 21Q18.3 21 18.15 20.85Q18 20.7 18 20.5Q17.9 17.75 16.812 15.337Q15.725 12.925 13.9 11.1Q12.075 9.275 9.663 8.187Q7.25 7.1 4.5 7Q4.3 7 4.15 6.85Q4 6.7 4 6.5Q4 6.3 4.15 6.15Q4.3 6 4.5 6Q7.45 6.1 10.05 7.275Q12.65 8.45 14.6 10.4Q16.55 12.35 17.725 14.95Q18.9 17.55 19 20.5Q19 20.7 18.85 20.85Q18.7 21 18.5 21ZM12.5 21Q12.3 21 12.15 20.85Q12 20.7 11.975 20.5Q11.775 17.475 9.65 15.35Q7.525 13.225 4.5 13.025Q4.3 13 4.15 12.85Q4 12.7 4 12.5Q4 12.3 4.15 12.15Q4.3 12 4.5 12.025Q7.925 12.225 10.35 14.65Q12.775 17.075 12.975 20.5Q13 20.7 12.85 20.85Q12.7 21 12.5 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeedRoundedW100Filled.displayName = 'AmauiIconMaterialRssFeedRoundedW100Filled';

export default IconMaterialRssFeedRoundedW100Filled;
