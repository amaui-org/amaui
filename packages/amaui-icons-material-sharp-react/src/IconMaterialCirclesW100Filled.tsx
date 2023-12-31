import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCirclesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesW100Filled'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-860q75 0 127.5 52.5T860-680q0 75-52.5 127.5T680-500q-75 0-127.5-52.5T500-680q0-75 52.5-127.5T680-860Zm-1 440q10.702 0 20.851-.5T721-423q-7 112-88 188.5T440-158q-58 0-109.5-22t-90-60.5Q202-279 180-330.5T158-440q0-112 76.5-192.5T423-722q-2 11-2.5 21.667-.5 10.666-.5 21.333 0 108 75.609 183.5Q571.217-420 679-420Z"/>
    </Icon>
  );
});

IconMaterialCirclesW100Filled.displayName = 'AmauiIconMaterialCirclesW100Filled';

export default IconMaterialCirclesW100Filled;
