import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollRoundedFilled'
      short_name='Toll'

      {...props}
    >
      <path d="M15 20Q11.65 20 9.325 17.675Q7 15.35 7 12Q7 8.65 9.325 6.325Q11.65 4 15 4Q18.35 4 20.675 6.325Q23 8.65 23 12Q23 15.35 20.675 17.675Q18.35 20 15 20ZM5.625 19.25Q3.525 18.275 2.263 16.325Q1 14.375 1 12Q1 9.625 2.263 7.675Q3.525 5.725 5.625 4.75Q6.15 4.5 6.575 4.787Q7 5.075 7 5.725Q7 5.975 6.838 6.212Q6.675 6.45 6.425 6.575Q4.85 7.3 3.925 8.762Q3 10.225 3 12Q3 13.775 3.925 15.237Q4.85 16.7 6.425 17.425Q6.675 17.55 6.838 17.775Q7 18 7 18.275Q7 18.9 6.575 19.2Q6.15 19.5 5.625 19.25Z"/>
    </Icon>
  );
});

IconMaterialTollRoundedFilled.displayName = 'AmauiIconMaterialTollRoundedFilled';

export default IconMaterialTollRoundedFilled;
