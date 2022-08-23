import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifiBadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBadSharpFilled'
      short_name='SignalWifiBad'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9L21 12H12ZM15.4 21 14 19.6 16.1 17.5 14 15.4 15.4 14 17.5 16.1 19.6 14 21 15.4 18.9 17.5 21 19.6 19.6 21 17.5 18.9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBadSharpFilled.displayName = 'AmauiIconMaterialSignalWifiBadSharpFilled';

export default IconMaterialSignalWifiBadSharpFilled;
