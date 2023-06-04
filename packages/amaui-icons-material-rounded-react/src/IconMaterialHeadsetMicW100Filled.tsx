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
      <path d="M12.35 20.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.85q.35 0 .575-.225Q19 19.75 19 19.4v-.7h-1.3q-.625 0-1.063-.438-.437-.437-.437-1.062v-2.6q0-.625.437-1.063.438-.437 1.063-.437H19V11q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11v2.1h1.3q.625 0 1.063.437.437.438.437 1.063v2.6q0 .625-.437 1.062-.438.438-1.063.438h-.5q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V11q0-1.6.6-3t1.65-2.45Q7.6 4.5 9 3.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 6.6 19.1 8q.6 1.4.6 3v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicW100Filled.displayName = 'AmauiIconMaterialHeadsetMicW100Filled';

export default IconMaterialHeadsetMicW100Filled;
