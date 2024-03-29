import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColorsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOff'

      short_name='InvertColorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.275 16.45 12 9.175V4.8L9.775 6.975l-1.4-1.4L12 2l5.65 5.575q1.2 1.2 1.775 2.587Q20 11.55 20 13.1q0 .95-.2 1.812-.2.863-.525 1.538Zm.525 6.15-3.1-3.1q-1.05.775-2.287 1.137Q13.175 21 12 21q-3.325 0-5.662-2.288Q4 16.425 4 13.1q0-1.275.4-2.45.4-1.175 1.2-2.25L1.4 4.2l1.4-1.4 18.4 18.4ZM12 19v-4.175l-5-5q-.525.8-.762 1.613Q6 12.25 6 13.1q0 2.5 1.75 4.2Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOff.displayName = 'AmauiIconMaterialInvertColorsOff';

export default IconMaterialInvertColorsOff;
