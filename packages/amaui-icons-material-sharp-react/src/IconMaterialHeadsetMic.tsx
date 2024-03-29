import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetMic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMic'

      short_name='HeadsetMic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23v-2h7v-1h-4v-8h4v-1q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11v1h4v8H3v-9q0-1.85.712-3.488.713-1.637 1.938-2.862t2.862-1.938Q10.15 2 12 2t3.488.712q1.637.713 2.862 1.938t1.938 2.862Q21 9.15 21 11v12Zm-7-5h2v-4H5Zm12 0h2v-4h-2ZM5 18h2Zm12 0h2Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMic.displayName = 'AmauiIconMaterialHeadsetMic';

export default IconMaterialHeadsetMic;
