import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleFilled'

      short_name='CheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 13.8-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7 0 .425.275.7L9.9 15.9q.275.275.7.275.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleFilled.displayName = 'AmauiIconMaterialCheckCircleFilled';

export default IconMaterialCheckCircleFilled;
