import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundFilled'

      short_name='Outbound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11.4v1.275q0 .425.288.7.287.275.712.275t.713-.288q.287-.287.287-.712V9q0-.425-.287-.713Q15.425 8 15 8h-3.675q-.425 0-.7.287-.275.288-.275.713t.288.712q.287.288.712.288h1.225l-4.4 4.4q-.275.275-.275.687 0 .413.3.713.275.275.7.275.425 0 .7-.275ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialOutboundFilled.displayName = 'AmauiIconMaterialOutboundFilled';

export default IconMaterialOutboundFilled;
