import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeRoundedFilled'
      short_name='Cake'

      {...props}
    >
      <path d="M5 13V10Q5 9.175 5.588 8.587Q6.175 8 7 8H11V6.55Q10.55 6.25 10.275 5.825Q10 5.4 10 4.8Q10 4.425 10.15 4.062Q10.3 3.7 10.6 3.4L11.65 2.35Q11.7 2.3 12 2.2Q12.05 2.2 12.35 2.35L13.4 3.4Q13.7 3.7 13.85 4.062Q14 4.425 14 4.8Q14 5.4 13.725 5.825Q13.45 6.25 13 6.55V8H17Q17.825 8 18.413 8.587Q19 9.175 19 10V13ZM4 22Q3.575 22 3.288 21.712Q3 21.425 3 21V17Q3 16.175 3.587 15.588Q4.175 15 5 15H19Q19.825 15 20.413 15.588Q21 16.175 21 17V21Q21 21.425 20.712 21.712Q20.425 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialCakeRoundedFilled.displayName = 'AmauiIconMaterialCakeRoundedFilled';

export default IconMaterialCakeRoundedFilled;
