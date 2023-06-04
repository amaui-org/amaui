import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyFilled'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.7 18.7-1.4-1.4 2.3-2.3-2.3-2.3 1.4-1.4 2.3 2.3 2.3-2.3 1.4 1.4-2.3 2.3 2.3 2.3-1.4 1.4-2.3-2.3ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5Z"/>
    </Icon>
  );
});

IconMaterialEventBusyFilled.displayName = 'AmauiIconMaterialEventBusyFilled';

export default IconMaterialEventBusyFilled;
