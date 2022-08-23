import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnsubscribeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeRoundedFilled'
      short_name='Unsubscribe'

      {...props}
    >
      <path d="M19 23Q16.925 23 15.463 21.538Q14 20.075 14 18Q14 15.925 15.463 14.462Q16.925 13 19 13Q21.075 13 22.538 14.462Q24 15.925 24 18Q24 20.075 22.538 21.538Q21.075 23 19 23ZM16.5 18.5H21.5Q21.7 18.5 21.85 18.35Q22 18.2 22 18Q22 17.8 21.85 17.65Q21.7 17.5 21.5 17.5H16.5Q16.3 17.5 16.15 17.65Q16 17.8 16 18Q16 18.2 16.15 18.35Q16.3 18.5 16.5 18.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V11.7Q21.375 11.4 20.538 11.2Q19.7 11 19 11Q17.55 11 16.275 11.55Q15 12.1 14.05 13.05Q13.1 14 12.55 15.275Q12 16.55 12 18Q12 18.525 12.075 19.012Q12.15 19.5 12.3 20ZM12 12.825Q12.125 12.825 12.262 12.787Q12.4 12.75 12.525 12.675L19.6 8.25Q19.8 8.125 19.9 7.95Q20 7.775 20 7.525Q20 7.075 19.6 6.8Q19.2 6.525 18.7 6.8L12 11L5.3 6.8Q4.825 6.525 4.412 6.787Q4 7.05 4 7.525Q4 7.775 4.1 7.95Q4.2 8.125 4.4 8.25L11.475 12.675Q11.6 12.75 11.738 12.787Q11.875 12.825 12 12.825Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeRoundedFilled.displayName = 'AmauiIconMaterialUnsubscribeRoundedFilled';

export default IconMaterialUnsubscribeRoundedFilled;
