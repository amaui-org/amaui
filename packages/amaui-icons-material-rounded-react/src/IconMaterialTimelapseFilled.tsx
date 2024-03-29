import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimelapseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseFilled'

      short_name='Timelapse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 16.975q.725.5 1.588.763Q11.1 18 12 18q2.5 0 4.25-1.75T18 12q0-2.2-1.375-3.838Q15.25 6.525 13.15 6.1q-.45-.1-.8.238-.35.337-.35.837V12l-3.425 3.425q-.35.35-.337.813.012.462.412.737ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimelapseFilled.displayName = 'AmauiIconMaterialTimelapseFilled';

export default IconMaterialTimelapseFilled;
