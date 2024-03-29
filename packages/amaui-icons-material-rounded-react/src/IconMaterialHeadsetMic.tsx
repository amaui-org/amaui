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
      <path d="M13 23q-.425 0-.712-.288Q12 22.425 12 22t.288-.712Q12.575 21 13 21h6v-1h-2q-.825 0-1.412-.587Q15 18.825 15 18v-4q0-.825.588-1.413Q16.175 12 17 12h2v-1q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11v1h2q.825 0 1.412.587Q9 13.175 9 14v4q0 .825-.588 1.413Q7.825 20 7 20H5q-.825 0-1.413-.587Q3 18.825 3 18v-7q0-1.85.712-3.488.713-1.637 1.938-2.862t2.862-1.938Q10.15 2 12 2t3.488.712q1.637.713 2.862 1.938t1.938 2.862Q21 9.15 21 11v10q0 .825-.587 1.413Q19.825 23 19 23Zm-8-5h2v-4H5v4Zm12 0h2v-4h-2v4ZM5 18h2Zm12 0h2Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMic.displayName = 'AmauiIconMaterialHeadsetMic';

export default IconMaterialHeadsetMic;
