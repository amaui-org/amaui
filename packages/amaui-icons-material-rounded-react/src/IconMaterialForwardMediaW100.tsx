import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardMediaW100'

      short_name='ForwardMedia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 924q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24h18l-58-58q-5-5-5-10t5-10q4-4 9.5-4t10.5 4l71 70q9 9 9 21t-9 21l-69 70q-4 5-9.5 5t-10.5-5q-5-5-5-10t5-10l56-56h-18q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896q112 0 192-76.5T759 631q1-6 5-10.5t10-4.5q6 0 10 4.5t4 10.5q-6 124-95 208.5T480 924Z"/>
    </Icon>
  );
});

IconMaterialForwardMediaW100.displayName = 'AmauiIconMaterialForwardMediaW100';

export default IconMaterialForwardMediaW100;
