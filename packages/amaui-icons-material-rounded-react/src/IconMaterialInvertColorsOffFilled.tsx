import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColorsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOffFilled'

      short_name='InvertColorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.275 16.45 12 9.175V4.8L9.775 6.975l-1.4-1.4L11.3 2.7q.15-.15.325-.225Q11.8 2.4 12 2.4t.375.075q.175.075.325.225l4.95 4.875q1.2 1.2 1.775 2.587Q20 11.55 20 13.1q0 .95-.2 1.812-.2.863-.525 1.538ZM19.1 21.9l-2.4-2.4q-1.05.775-2.287 1.137Q13.175 21 12 21q-3.325 0-5.662-2.288Q4 16.425 4 13.1q0-1.275.4-2.45.4-1.175 1.2-2.25L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM12 19v-4.175l-5-5q-.525.8-.762 1.613Q6 12.25 6 13.1q0 2.5 1.75 4.2Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOffFilled.displayName = 'AmauiIconMaterialInvertColorsOffFilled';

export default IconMaterialInvertColorsOffFilled;
