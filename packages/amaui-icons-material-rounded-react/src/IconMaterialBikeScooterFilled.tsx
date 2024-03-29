import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeScooterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterFilled'

      short_name='BikeScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-1.25 0-2.125-.875T7 18q0-1.25.875-2.125T10 15q1.25 0 2.125.875T13 18q0 1.25-.875 2.125T10 21ZM0 19v-2h4.1q.275-1.7 1.413-2.975Q6.65 12.75 8.3 12.25L6.85 6H4q-.425 0-.712-.287Q3 5.425 3 5t.288-.713Q3.575 4 4 4h2.85q.675 0 1.238.438.562.437.712 1.112L10.75 14H10q-1.65 0-2.825 1.175Q6 16.35 6 18v1Zm19-1q-1.8 0-3.162-1.113Q14.475 15.775 14.1 14h-2.35l-.45-2h2.8q.125-.575.338-1.075.212-.5.562-.925h-4.15l-.45-2h5.65l-1.1-3h-2.7q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q11.825 3 12.25 3h2.7q.65 0 1.163.35.512.35.737.95l1.35 3.65h.8q2.075 0 3.538 1.462Q24 10.875 24 12.95q0 2.125-1.462 3.588Q21.075 18 19 18Zm-.05-5q.4-.175.575-.538.175-.362.025-.762L18.9 10l-1.85.7.6 1.7q.125.4.525.575.4.175.775.025Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterFilled.displayName = 'AmauiIconMaterialBikeScooterFilled';

export default IconMaterialBikeScooterFilled;
