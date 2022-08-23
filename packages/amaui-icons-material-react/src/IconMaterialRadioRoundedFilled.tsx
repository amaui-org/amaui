import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioRoundedFilled'
      short_name='Radio'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V8Q2 7.375 2.338 6.875Q2.675 6.375 3.25 6.15L15.075 1.325Q15.425 1.2 15.763 1.337Q16.1 1.475 16.225 1.825Q16.35 2.175 16.212 2.512Q16.075 2.85 15.725 2.975L8.3 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 11H16V10Q16 9.575 16.288 9.287Q16.575 9 17 9Q17.425 9 17.712 9.287Q18 9.575 18 10V11H20V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8ZM8 19Q9.05 19 9.775 18.275Q10.5 17.55 10.5 16.5Q10.5 15.45 9.775 14.725Q9.05 14 8 14Q6.95 14 6.225 14.725Q5.5 15.45 5.5 16.5Q5.5 17.55 6.225 18.275Q6.95 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialRadioRoundedFilled.displayName = 'AmauiIconMaterialRadioRoundedFilled';

export default IconMaterialRadioRoundedFilled;
