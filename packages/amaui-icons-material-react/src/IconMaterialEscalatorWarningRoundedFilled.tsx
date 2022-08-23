import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorWarningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningRoundedFilled'
      short_name='EscalatorWarning'

      {...props}
    >
      <path d="M6.5 6Q5.675 6 5.088 5.412Q4.5 4.825 4.5 4Q4.5 3.175 5.088 2.587Q5.675 2 6.5 2Q7.325 2 7.912 2.587Q8.5 3.175 8.5 4Q8.5 4.825 7.912 5.412Q7.325 6 6.5 6ZM17 11Q16.375 11 15.938 10.562Q15.5 10.125 15.5 9.5Q15.5 8.875 15.938 8.438Q16.375 8 17 8Q17.625 8 18.062 8.438Q18.5 8.875 18.5 9.5Q18.5 10.125 18.062 10.562Q17.625 11 17 11ZM5.5 22Q5.075 22 4.787 21.712Q4.5 21.425 4.5 21V15H4Q3.575 15 3.288 14.712Q3 14.425 3 14V9Q3 8.175 3.587 7.587Q4.175 7 5 7H8Q8.55 7 9 7.262Q9.45 7.525 9.725 8L13.3 14.175L14.325 12.65Q14.525 12.35 14.863 12.175Q15.2 12 15.575 12H18.5Q19.125 12 19.562 12.438Q20 12.875 20 13.5V16Q20 16.425 19.712 16.712Q19.425 17 19 17V21Q19 21.425 18.712 21.712Q18.425 22 18 22H16Q15.575 22 15.288 21.712Q15 21.425 15 21V14.9L14.525 15.575Q14.375 15.775 14.163 15.887Q13.95 16 13.7 16H12.6Q12.325 16 12.088 15.863Q11.85 15.725 11.725 15.5L9.5 11.6V21Q9.5 21.425 9.213 21.712Q8.925 22 8.5 22Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningRoundedFilled.displayName = 'AmauiIconMaterialEscalatorWarningRoundedFilled';

export default IconMaterialEscalatorWarningRoundedFilled;
