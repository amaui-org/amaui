import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForward5SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5SharpFilled'
      short_name='Forward5'

      {...props}
    >
      <path d="M9.5 16V14.5H12.5V13.5H9.5V10H14V11.5H11V12.5H14V16ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4H12.15L10.6 2.45L12 1L16 5L12 9L10.6 7.55L12.15 6H12Q9.075 6 7.038 8.037Q5 10.075 5 13Q5 15.925 7.038 17.962Q9.075 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13H21Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialForward5SharpFilled.displayName = 'AmauiIconMaterialForward5SharpFilled';

export default IconMaterialForward5SharpFilled;
