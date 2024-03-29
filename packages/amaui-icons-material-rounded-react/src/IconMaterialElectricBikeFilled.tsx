import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeFilled'

      short_name='ElectricBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 23-6-3h4v-2l6 3h-4Zm-8-6q-2.125 0-3.562-1.438Q0 14.125 0 12t1.463-3.562Q2.925 7 5 7q1.925 0 3.238 1.15Q9.55 9.3 9.9 11h.65l-1.8-5H8q-.425 0-.713-.287Q7 5.425 7 5t.287-.713Q7.575 4 8 4h3q.425 0 .713.287Q12 4.575 12 5t-.287.713Q11.425 6 11 6h-.1l.35 1h4.8L14.6 3H13q-.425 0-.712-.288Q12 2.425 12 2t.288-.713Q12.575 1 13 1h1.6q.65 0 1.163.35.512.35.737.95l1.7 4.65h.8q2.075 0 3.538 1.462Q24 9.875 24 11.95q0 2.1-1.45 3.575T19 17q-1.8 0-3.162-1.125Q14.475 14.75 14.1 13H9.9q-.35 1.725-1.7 2.863Q6.85 17 5 17Zm1-4h1.8v-2H6q-.425 0-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13Zm12.95-1q.4-.175.575-.538.175-.362.025-.762L18.9 9l-1.85.7.6 1.7q.125.4.525.575.4.175.775.025Zm-6.25-1h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeFilled.displayName = 'AmauiIconMaterialElectricBikeFilled';

export default IconMaterialElectricBikeFilled;
