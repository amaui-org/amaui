import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRounded'
      short_name='Tv'

      {...props}
    >
      <path d="M9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21ZM4 17H20Q20 17 20 17Q20 17 20 17V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17ZM4 17Q4 17 4 17Q4 17 4 17V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17Z"/>
    </Icon>
  );
});

IconMaterialTvRounded.displayName = 'AmauiIconMaterialTvRounded';

export default IconMaterialTvRounded;
