import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRssFeedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedSharpFilled'
      short_name='RssFeed'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19Q3 18.175 3.587 17.587Q4.175 17 5 17Q5.825 17 6.412 17.587Q7 18.175 7 19Q7 19.825 6.412 20.413Q5.825 21 5 21ZM17 21Q17 18.1 15.9 15.562Q14.8 13.025 12.888 11.112Q10.975 9.2 8.438 8.1Q5.9 7 3 7V4Q6.525 4 9.625 5.338Q12.725 6.675 15.025 8.975Q17.325 11.275 18.663 14.375Q20 17.475 20 21ZM11 21Q11 17.675 8.662 15.338Q6.325 13 3 13V10Q5.3 10 7.3 10.863Q9.3 11.725 10.788 13.212Q12.275 14.7 13.137 16.7Q14 18.7 14 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeedSharpFilled.displayName = 'AmauiIconMaterialRssFeedSharpFilled';

export default IconMaterialRssFeedSharpFilled;
