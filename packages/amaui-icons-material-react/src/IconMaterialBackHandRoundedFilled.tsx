import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackHandRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandRoundedFilled'
      short_name='BackHand'

      {...props}
    >
      <path d="M13 24Q10.2 24 8.263 22.45Q6.325 20.9 5.475 18.725L2.575 11.375Q2.375 10.875 2.663 10.438Q2.95 10 3.475 10Q3.975 10 4.75 10.337Q5.525 10.675 5.85 11.475L7.125 14.675Q7.15 14.75 7.575 15H8V3.25Q8 2.725 8.363 2.362Q8.725 2 9.25 2Q9.775 2 10.137 2.362Q10.5 2.725 10.5 3.25V11.5Q10.5 11.7 10.65 11.85Q10.8 12 11 12Q11.2 12 11.35 11.85Q11.5 11.7 11.5 11.5V1.25Q11.5 0.725 11.863 0.362Q12.225 0 12.75 0Q13.275 0 13.637 0.362Q14 0.725 14 1.25V11.5Q14 11.7 14.15 11.85Q14.3 12 14.5 12Q14.7 12 14.85 11.85Q15 11.7 15 11.5V2.75Q15 2.225 15.363 1.862Q15.725 1.5 16.25 1.5Q16.775 1.5 17.138 1.862Q17.5 2.225 17.5 2.75V11.5Q17.5 11.7 17.65 11.85Q17.8 12 18 12Q18.2 12 18.35 11.85Q18.5 11.7 18.5 11.5V5.75Q18.5 5.225 18.863 4.862Q19.225 4.5 19.75 4.5Q20.275 4.5 20.638 4.862Q21 5.225 21 5.75V16Q21 19.35 18.675 21.675Q16.35 24 13 24Z"/>
    </Icon>
  );
});

IconMaterialBackHandRoundedFilled.displayName = 'AmauiIconMaterialBackHandRoundedFilled';

export default IconMaterialBackHandRoundedFilled;
