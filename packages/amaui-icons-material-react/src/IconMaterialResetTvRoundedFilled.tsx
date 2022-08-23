import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvRoundedFilled'
      short_name='ResetTv'

      {...props}
    >
      <path d="M9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V10H12.8L13.95 8.85Q14.225 8.575 14.225 8.15Q14.225 7.725 13.95 7.45Q13.675 7.175 13.25 7.175Q12.825 7.175 12.55 7.45L9.7 10.3Q9.55 10.45 9.488 10.625Q9.425 10.8 9.425 11Q9.425 11.2 9.488 11.375Q9.55 11.55 9.7 11.7L12.55 14.55Q12.825 14.825 13.25 14.825Q13.675 14.825 13.95 14.55Q14.225 14.275 14.225 13.85Q14.225 13.425 13.95 13.15L12.8 12H22V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialResetTvRoundedFilled.displayName = 'AmauiIconMaterialResetTvRoundedFilled';

export default IconMaterialResetTvRoundedFilled;
