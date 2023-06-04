import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicW100Filled'

      short_name='HeadsetMic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.9v-.7h7v-1.5h-2.8v-5.6H19V11q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11v2.1h2.8v5.6H4.3V11q0-1.6.6-3t1.65-2.45Q7.6 4.5 9 3.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 6.6 19.1 8q.6 1.4.6 3v9.9Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicW100Filled.displayName = 'AmauiIconMaterialHeadsetMicW100Filled';

export default IconMaterialHeadsetMicW100Filled;
