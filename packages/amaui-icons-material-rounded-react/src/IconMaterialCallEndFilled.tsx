import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndFilled'

      short_name='CallEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8q3.125 0 5.95 1.238 2.825 1.237 4.95 3.512.275.275.275.7 0 .425-.275.7l-2.3 2.25q-.275.275-.637.3-.363.025-.663-.2L16 14v-3.35q-.975-.325-1.975-.488Q13.025 10 12 10t-2.025.162q-1 .163-1.975.488V14l-3.3 2.5q-.3.225-.662.2-.363-.025-.638-.3l-2.3-2.25q-.275-.275-.275-.7 0-.425.275-.7 2.125-2.3 4.95-3.525T12 8Z"/>
    </Icon>
  );
});

IconMaterialCallEndFilled.displayName = 'AmauiIconMaterialCallEndFilled';

export default IconMaterialCallEndFilled;
