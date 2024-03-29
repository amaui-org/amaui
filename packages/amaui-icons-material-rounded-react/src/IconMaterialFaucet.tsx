import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaucet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Faucet'

      short_name='Faucet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15q-.425 0-.712-.288Q2 14.425 2 14t.288-.713Q2.575 13 3 13h4v-1H5q-.425 0-.713-.288Q4 11.425 4 11t.287-.713Q4.575 10 5 10h2q.825 0 1.412.587Q9 11.175 9 12v1h2V6.1q0-1.725 1.2-2.912Q13.4 2 15.125 2q1.15 0 2.125.6.975.6 1.5 1.65l.7 1.4q.2.375.063.762Q19.375 6.8 19 7q-.375.2-.762.062-.388-.137-.588-.512l-.7-1.4q-.275-.525-.775-.838Q15.675 4 15.1 4q-.875 0-1.487.612Q13 5.225 13 6.1V13h2v-1q0-.825.588-1.413Q16.175 10 17 10h2q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 12 19 12h-2v1h4q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 15 21 15Zm3 6q-.825 0-1.412-.587Q4 19.825 4 19v-4h2v4h12v-4h2v4q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialFaucet.displayName = 'AmauiIconMaterialFaucet';

export default IconMaterialFaucet;
