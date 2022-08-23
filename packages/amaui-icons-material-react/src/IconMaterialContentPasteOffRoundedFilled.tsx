import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentPasteOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffRoundedFilled'
      short_name='ContentPasteOff'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L2.075 4.925Q1.775 4.625 1.775 4.212Q1.775 3.8 2.075 3.5Q2.375 3.2 2.788 3.2Q3.2 3.2 3.5 3.5L20.5 20.5Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9L18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21ZM5 19H16.15L5 7.85V19Q5 19 5 19Q5 19 5 19ZM21 18.15 19 16.15V5Q19 5 19 5Q19 5 19 5H17V6Q17 6.825 16.413 7.412Q15.825 8 15 8H10.85L5.85 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.725 1.55Q14.5 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffRoundedFilled.displayName = 'AmauiIconMaterialContentPasteOffRoundedFilled';

export default IconMaterialContentPasteOffRoundedFilled;
