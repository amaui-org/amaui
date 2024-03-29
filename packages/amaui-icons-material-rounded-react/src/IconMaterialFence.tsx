import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFence = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fence'

      short_name='Fence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-3H4q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h1v-2H4q-.425 0-.712-.288Q3 11.425 3 11t.288-.713Q3.575 10 4 10h1V7.425q0-.2.075-.388.075-.187.225-.337l2-2q.3-.3.7-.3.4 0 .7.3L10 6l1.3-1.3q.3-.3.713-.3.412 0 .712.3l1.3 1.3L15.3 4.7q.3-.3.713-.3.412 0 .712.3l2 2q.15.15.225.337.075.188.075.388V10H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 12 20 12h-.975v2H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 16 20 16h-.975v3q0 .425-.287.712-.288.288-.713.288Zm1-10h2V7.825l-1-1-1 1Zm4 0h2V7.825l-1-1-1 1Zm4.025 0H17V7.825l-1-1-.975.975ZM7 14h2v-2H7Zm4 0h2v-2h-2Zm4.025 0H17v-2h-1.975ZM7 18h2v-2H7Zm4 0h2v-2h-2Zm4.025 0H17v-2h-1.975Z"/>
    </Icon>
  );
});

IconMaterialFence.displayName = 'AmauiIconMaterialFence';

export default IconMaterialFence;
