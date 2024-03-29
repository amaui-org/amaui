import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallReceived = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceived'

      short_name='CallReceived'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-8q0-.425.287-.713Q5.575 10 6 10t.713.287Q7 10.575 7 11v5.6L17.925 5.675Q18.2 5.4 18.6 5.4t.7.3q.275.275.275.7 0 .425-.275.7L8.4 18H14q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 20 14 20Z"/>
    </Icon>
  );
});

IconMaterialCallReceived.displayName = 'AmauiIconMaterialCallReceived';

export default IconMaterialCallReceived;
