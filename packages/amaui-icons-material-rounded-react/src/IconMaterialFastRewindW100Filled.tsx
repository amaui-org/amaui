import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100Filled'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.25 15.425-4.2-2.8q-.325-.225-.325-.625t.325-.625l4.2-2.8q.375-.275.775-.05.4.225.4.675v5.6q0 .45-.4.675-.4.225-.775-.05Zm-8.55 0-4.2-2.8Q5.175 12.4 5.175 12t.325-.625l4.2-2.8q.375-.275.775-.05.4.225.4.675v5.6q0 .45-.4.675-.4.225-.775-.05Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100Filled.displayName = 'AmauiIconMaterialFastRewindW100Filled';

export default IconMaterialFastRewindW100Filled;
