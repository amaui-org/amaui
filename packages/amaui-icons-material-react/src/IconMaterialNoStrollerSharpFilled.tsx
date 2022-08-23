import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoStrollerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerSharpFilled'
      short_name='NoStroller'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20Q4 19.175 4.588 18.587Q5.175 18 6 18Q6.825 18 7.412 18.587Q8 19.175 8 20Q8 20.825 7.412 21.413Q6.825 22 6 22ZM17 14.175 11.975 9.15 15.475 5.025Q15.975 4.45 16.688 3.725Q17.4 3 18.65 3Q20.075 3 21.038 4.012Q22 5.025 22 6.475V7H20V6.475Q20 5.85 19.613 5.425Q19.225 5 18.65 5Q18.15 5 17.788 5.387Q17.425 5.775 17 6.275ZM10.9 8.075 6.525 3.7Q7.325 3.35 8.2 3.175Q9.075 3 10 3Q11.175 3 12.263 3.287Q13.35 3.575 14.3 4.1ZM19.775 22.6 14.175 17H5.275L9.35 12.2L1.4 4.225L2.8 2.8L21.2 21.2ZM16 22Q15.175 22 14.588 21.413Q14 20.825 14 20Q14 19.175 14.588 18.587Q15.175 18 16 18Q16.825 18 17.413 18.587Q18 19.175 18 20Q18 20.825 17.413 21.413Q16.825 22 16 22Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerSharpFilled.displayName = 'AmauiIconMaterialNoStrollerSharpFilled';

export default IconMaterialNoStrollerSharpFilled;
