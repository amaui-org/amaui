import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalDiningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDiningRoundedFilled'
      short_name='LocalDining'

      {...props}
    >
      <path d="M3.725 20.3Q3.45 20.025 3.45 19.6Q3.45 19.175 3.725 18.9L13.275 9.35Q12.825 8.3 13.15 6.975Q13.475 5.65 14.575 4.6Q15.9 3.275 17.525 3.05Q19.15 2.825 20.175 3.85Q21.2 4.875 20.975 6.5Q20.75 8.125 19.425 9.45Q18.375 10.55 17.05 10.875Q15.725 11.2 14.675 10.75L13.425 12L20.325 18.9Q20.6 19.175 20.6 19.6Q20.6 20.025 20.325 20.3Q20.025 20.6 19.625 20.6Q19.225 20.6 18.925 20.3L12.025 13.45L5.125 20.3Q4.825 20.6 4.425 20.6Q4.025 20.6 3.725 20.3ZM7.375 12.45 4.375 9.45Q3.25 8.325 3.062 6.825Q2.875 5.325 3.625 4Q3.875 3.575 4.375 3.525Q4.875 3.475 5.25 3.875L10.575 9.25Z"/>
    </Icon>
  );
});

IconMaterialLocalDiningRoundedFilled.displayName = 'AmauiIconMaterialLocalDiningRoundedFilled';

export default IconMaterialLocalDiningRoundedFilled;
