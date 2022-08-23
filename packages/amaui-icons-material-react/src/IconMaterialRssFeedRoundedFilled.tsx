import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRssFeedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedRoundedFilled'
      short_name='RssFeed'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19Q3 18.175 3.587 17.587Q4.175 17 5 17Q5.825 17 6.412 17.587Q7 18.175 7 19Q7 19.825 6.412 20.413Q5.825 21 5 21ZM18.475 21Q17.875 21 17.438 20.575Q17 20.15 16.925 19.525Q16.675 17.075 15.613 14.925Q14.55 12.775 12.888 11.112Q11.225 9.45 9.075 8.387Q6.925 7.325 4.475 7.075Q3.85 7 3.425 6.55Q3 6.1 3 5.475Q3 4.85 3.438 4.437Q3.875 4.025 4.475 4.075Q7.55 4.325 10.25 5.625Q12.95 6.925 15.012 8.988Q17.075 11.05 18.375 13.75Q19.675 16.45 19.925 19.525Q19.975 20.125 19.55 20.562Q19.125 21 18.475 21ZM12.475 21Q11.9 21 11.438 20.587Q10.975 20.175 10.85 19.525Q10.4 17.1 8.65 15.35Q6.9 13.6 4.475 13.15Q3.825 13.025 3.413 12.55Q3 12.075 3 11.475Q3 10.825 3.45 10.425Q3.9 10.025 4.475 10.1Q8.175 10.6 10.788 13.212Q13.4 15.825 13.9 19.525Q13.975 20.1 13.55 20.55Q13.125 21 12.475 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeedRoundedFilled.displayName = 'AmauiIconMaterialRssFeedRoundedFilled';

export default IconMaterialRssFeedRoundedFilled;
