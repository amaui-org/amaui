import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatFilled'

      short_name='Nat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15q-1.25 0-2.125-.875T1 12q0-1.25.875-2.125T4 9q.975 0 1.738.562Q6.5 10.125 6.8 11H11v2H6.8q-.3.875-1.062 1.438Q4.975 15 4 15Zm0-2q.425 0 .713-.288Q5 12.425 5 12t-.287-.713Q4.425 11 4 11t-.712.287Q3 11.575 3 12t.288.712Q3.575 13 4 13Zm1 9v-2q3.325 0 5.663-2.337Q13 15.325 13 12t-2.337-5.663Q8.325 4 5 4V2q3.925 0 6.75 2.6t3.2 6.4h4.2L17.6 9.4 19 8l4 4-4 4-1.4-1.4 1.55-1.6h-4.2q-.375 3.8-3.2 6.4Q8.925 22 5 22Z"/>
    </Icon>
  );
});

IconMaterialNatFilled.displayName = 'AmauiIconMaterialNatFilled';

export default IconMaterialNatFilled;
