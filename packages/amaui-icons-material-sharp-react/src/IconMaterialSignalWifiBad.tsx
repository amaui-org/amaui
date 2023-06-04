import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBad'

      short_name='SignalWifiBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9l-3 3h-9Zm3.4 0L14 19.6l2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.1 2.1 2.1 2.1-1.4 1.4-2.1-2.1Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBad.displayName = 'AmauiIconMaterialSignalWifiBad';

export default IconMaterialSignalWifiBad;
