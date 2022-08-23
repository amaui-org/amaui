import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvRounded'
      short_name='LiveTv'

      {...props}
    >
      <path d="M11.05 14.5 15.2 11.85Q15.425 11.7 15.538 11.475Q15.65 11.25 15.65 11Q15.65 10.75 15.538 10.525Q15.425 10.3 15.2 10.15L11.05 7.5Q10.55 7.175 10.025 7.45Q9.5 7.725 9.5 8.325V13.675Q9.5 14.275 10.025 14.55Q10.55 14.825 11.05 14.5ZM9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21ZM4 17H20Q20 17 20 17Q20 17 20 17V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17ZM4 17Q4 17 4 17Q4 17 4 17V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17Z"/>
    </Icon>
  );
});

IconMaterialLiveTvRounded.displayName = 'AmauiIconMaterialLiveTvRounded';

export default IconMaterialLiveTvRounded;
