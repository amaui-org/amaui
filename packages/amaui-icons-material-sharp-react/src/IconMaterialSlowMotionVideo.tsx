import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlowMotionVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlowMotionVideo'

      short_name='SlowMotionVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.25 18.3q-.95-1.1-1.525-2.45T2 13h2.05q.15 1.1.55 2.087.4.988 1.05 1.813ZM2 11q.2-1.5.75-2.85t1.5-2.45l1.4 1.4Q5 7.925 4.6 8.912 4.2 9.9 4.05 11Zm8.95 10.95q-1.5-.15-2.837-.725-1.338-.575-2.463-1.475l1.4-1.45q.875.65 1.838 1.075.962.425 2.062.575ZM7.1 5.7 5.65 4.25q1.125-.9 2.463-1.475Q9.45 2.2 11 2.05v2q-1.125.15-2.1.575-.975.425-1.8 1.075Zm2.4 10.8v-9l7 4.5Zm3.5 5.45v-2q3.025-.425 5.013-2.675Q20 15.025 20 12q0-3.025-1.987-5.275Q16.025 4.475 13 4.05v-2q3.85.425 6.425 3.25Q22 8.125 22 12t-2.575 6.7Q16.85 21.525 13 21.95Z"/>
    </Icon>
  );
});

IconMaterialSlowMotionVideo.displayName = 'AmauiIconMaterialSlowMotionVideo';

export default IconMaterialSlowMotionVideo;
