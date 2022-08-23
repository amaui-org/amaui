import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlaySharp'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M7 4H17V3H7ZM16 23V21H17V6H7V12H5V1H19V23ZM5 23V21Q5.825 21 6.412 21.587Q7 22.175 7 23ZM9 23Q9 21.35 7.825 20.175Q6.65 19 5 19V17Q7.5 17 9.25 18.75Q11 20.5 11 23ZM13 23Q13 19.65 10.675 17.325Q8.35 15 5 15V13Q7.075 13 8.9 13.787Q10.725 14.575 12.075 15.925Q13.425 17.275 14.213 19.1Q15 20.925 15 23ZM7 4V3V4Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlaySharp.displayName = 'AmauiIconMaterialTapAndPlaySharp';

export default IconMaterialTapAndPlaySharp;
