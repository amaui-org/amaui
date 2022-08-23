import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownRoundedFilled'
      short_name='TrendingDown'

      {...props}
    >
      <path d="M17 18Q16.575 18 16.288 17.712Q16 17.425 16 17Q16 16.575 16.288 16.288Q16.575 16 17 16H18.6L13.4 10.85L10.1 14.15Q9.975 14.275 9.788 14.35Q9.6 14.425 9.4 14.425Q9.2 14.425 9.025 14.35Q8.85 14.275 8.7 14.15L2.675 8.075Q2.4 7.8 2.4 7.4Q2.4 7 2.7 6.7Q2.975 6.425 3.4 6.425Q3.825 6.425 4.1 6.7L9.4 12L12.7 8.7Q12.85 8.55 13.025 8.487Q13.2 8.425 13.4 8.425Q13.6 8.425 13.775 8.487Q13.95 8.55 14.1 8.7L20 14.6V13Q20 12.575 20.288 12.287Q20.575 12 21 12Q21.425 12 21.712 12.287Q22 12.575 22 13V17Q22 17.425 21.712 17.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownRoundedFilled.displayName = 'AmauiIconMaterialTrendingDownRoundedFilled';

export default IconMaterialTrendingDownRoundedFilled;
