import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageSearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchFilled'

      short_name='ImageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h7v2H5v14h14v-5.35l2 2V21Zm18.55-7.6-3.1-3.1q-.525.35-1.125.525-.6.175-1.275.175-1.85 0-3.15-1.312-1.3-1.313-1.3-3.188 0-1.875 1.313-3.188Q14.225 2 16.1 2q1.875 0 3.188 1.312Q20.6 4.625 20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12ZM16.1 9q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9ZM6 17l3-4 2.25 3 3-4L18 17Z"/>
    </Icon>
  );
});

IconMaterialImageSearchFilled.displayName = 'AmauiIconMaterialImageSearchFilled';

export default IconMaterialImageSearchFilled;
