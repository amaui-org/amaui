import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoyaltyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyFilled'

      short_name='Loyalty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17.075q.2 0 .375-.063.175-.062.325-.212l2.8-2.8q.275-.275.438-.65.162-.375.162-.8 0-.85-.6-1.45t-1.45-.6q-.475 0-.937.275-.463.275-1.113.925-.75-.7-1.175-.95-.425-.25-.875-.25-.85 0-1.45.6t-.6 1.45q0 .425.162.8.163.375.438.65l2.8 2.8q.15.15.325.212.175.063.375.063ZM12.85 22q-.425 0-.8-.163-.375-.162-.65-.437l-8.8-8.8q-.275-.275-.437-.65Q2 11.575 2 11.15V4q0-.825.588-1.413Q3.175 2 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412 0 .838-.575 1.413l-7.15 7.15q-.275.275-.637.437-.363.163-.763.163ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyFilled.displayName = 'AmauiIconMaterialLoyaltyFilled';

export default IconMaterialLoyaltyFilled;
