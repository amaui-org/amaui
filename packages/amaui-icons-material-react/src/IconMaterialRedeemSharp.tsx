import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedeemSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedeemSharp'
      short_name='Redeem'

      {...props}
    >
      <path d="M4 17V19H20V17ZM2 21V6H6.2Q6.075 5.775 6.037 5.525Q6 5.275 6 5Q6 3.75 6.875 2.875Q7.75 2 9 2Q9.75 2 10.387 2.387Q11.025 2.775 11.5 3.35L12 4L12.5 3.35Q12.95 2.75 13.6 2.375Q14.25 2 15 2Q16.25 2 17.125 2.875Q18 3.75 18 5Q18 5.275 17.962 5.525Q17.925 5.775 17.8 6H22V21ZM4 14H20V8H14.9L17 10.85L15.4 12L12 7.4L8.6 12L7 10.85L9.05 8H4ZM9 6Q9.425 6 9.713 5.713Q10 5.425 10 5Q10 4.575 9.713 4.287Q9.425 4 9 4Q8.575 4 8.288 4.287Q8 4.575 8 5Q8 5.425 8.288 5.713Q8.575 6 9 6ZM15 6Q15.425 6 15.713 5.713Q16 5.425 16 5Q16 4.575 15.713 4.287Q15.425 4 15 4Q14.575 4 14.288 4.287Q14 4.575 14 5Q14 5.425 14.288 5.713Q14.575 6 15 6Z"/>
    </Icon>
  );
});

IconMaterialRedeemSharp.displayName = 'AmauiIconMaterialRedeemSharp';

export default IconMaterialRedeemSharp;
