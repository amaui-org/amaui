import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingUpRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpRounded'
      short_name='TrendingUp'

      {...props}
    >
      <path d="M2.7 17.3Q2.425 17.025 2.425 16.612Q2.425 16.2 2.7 15.9L8.7 9.85Q8.85 9.725 9.025 9.65Q9.2 9.575 9.4 9.575Q9.6 9.575 9.788 9.65Q9.975 9.725 10.1 9.85L13.4 13.15L18.6 8H17Q16.575 8 16.288 7.713Q16 7.425 16 7Q16 6.575 16.288 6.287Q16.575 6 17 6H21Q21.425 6 21.712 6.287Q22 6.575 22 7V11Q22 11.425 21.712 11.712Q21.425 12 21 12Q20.575 12 20.288 11.712Q20 11.425 20 11V9.4L14.1 15.3Q13.95 15.45 13.775 15.512Q13.6 15.575 13.4 15.575Q13.2 15.575 13.025 15.512Q12.85 15.45 12.7 15.3L9.4 12L4.075 17.325Q3.8 17.6 3.4 17.6Q3 17.6 2.7 17.3Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpRounded.displayName = 'AmauiIconMaterialTrendingUpRounded';

export default IconMaterialTrendingUpRounded;
