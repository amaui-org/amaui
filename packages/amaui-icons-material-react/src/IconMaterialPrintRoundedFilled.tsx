import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintRoundedFilled'
      short_name='Print'

      {...props}
    >
      <path d="M18 7H6V4Q6 3.575 6.287 3.287Q6.575 3 7 3H17Q17.425 3 17.712 3.287Q18 3.575 18 4ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM8 19H16Q16 19 16 19Q16 19 16 19V15H8V19Q8 19 8 19Q8 19 8 19ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V17H3Q2.575 17 2.288 16.712Q2 16.425 2 16V11Q2 9.725 2.875 8.863Q3.75 8 5 8H19Q20.275 8 21.138 8.863Q22 9.725 22 11V16Q22 16.425 21.712 16.712Q21.425 17 21 17H18V19Q18 19.825 17.413 20.413Q16.825 21 16 21Z"/>
    </Icon>
  );
});

IconMaterialPrintRoundedFilled.displayName = 'AmauiIconMaterialPrintRoundedFilled';

export default IconMaterialPrintRoundedFilled;
