import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaucetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetFilled'

      short_name='Faucet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 15v-2h5v-1H5q-.425 0-.713-.288Q4 11.425 4 11t.287-.713Q4.575 10 5 10h2q.825 0 1.412.587Q9 11.175 9 12v1h2V6.1q0-1.725 1.2-2.912Q13.4 2 15.125 2q1.15 0 2.138.6.987.6 1.487 1.65l1.15 2.3-1.8.9-1.15-2.3q-.275-.525-.775-.838Q15.675 4 15.1 4q-.875 0-1.487.612Q13 5.225 13 6.1V13h2v-1q0-.825.588-1.413Q16.175 10 17 10h2q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 12 19 12h-2v1h5v2Zm4 6q-.825 0-1.412-.587Q4 19.825 4 19v-3h16v3q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialFaucetFilled.displayName = 'AmauiIconMaterialFaucetFilled';

export default IconMaterialFaucetFilled;
