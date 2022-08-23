import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioRoundedFilled'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M6 12Q6.425 12 6.713 11.712Q7 11.425 7 11V9H9.025Q9.45 9 9.725 8.712Q10 8.425 10 8Q10 7.575 9.713 7.287Q9.425 7 9 7H6Q5.575 7 5.287 7.287Q5 7.575 5 8V11.025Q5 11.45 5.287 11.725Q5.575 12 6 12ZM15 17H18Q18.425 17 18.712 16.712Q19 16.425 19 16V12.975Q19 12.55 18.712 12.275Q18.425 12 18 12Q17.575 12 17.288 12.287Q17 12.575 17 13V15H14.975Q14.55 15 14.275 15.287Q14 15.575 14 16Q14 16.425 14.288 16.712Q14.575 17 15 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioRoundedFilled.displayName = 'AmauiIconMaterialAspectRatioRoundedFilled';

export default IconMaterialAspectRatioRoundedFilled;
