import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventSeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeat'

      short_name='EventSeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h8v-6h-8Zm-9 3V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialEventSeat.displayName = 'AmauiIconMaterialEventSeat';

export default IconMaterialEventSeat;
