import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaRounded'
      short_name='Villa'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V8.675Q3 8.35 3.188 8.113Q3.375 7.875 3.65 7.75L14.65 3.525Q15.15 3.325 15.575 3.625Q16 3.925 16 4.45V12H17Q17 11.175 17.587 10.587Q18.175 10 19 10Q19.825 10 20.413 10.587Q21 11.175 21 12V20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM5 19H7H9Q9 19 9 19Q9 19 9 19V13Q9 12.575 9.288 12.287Q9.575 12 10 12H14V10V5.9L5 9.375ZM11 19H14V17Q14 16.575 14.288 16.288Q14.575 16 15 16Q15.425 16 15.713 16.288Q16 16.575 16 17V19H19V14H11ZM7 10Q7 10 7 10Q7 10 7 10ZM15 19Q15 19 15 19Q15 19 15 19Q15 19 15 19Q15 19 15 19ZM15 18.5Q15 18.5 15 18.5Q15 18.5 15 18.5Q15 18.5 15 18.5Q15 18.5 15 18.5Z"/>
    </Icon>
  );
});

IconMaterialVillaRounded.displayName = 'AmauiIconMaterialVillaRounded';

export default IconMaterialVillaRounded;
