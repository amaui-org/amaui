import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandCircleDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDownFilled'

      short_name='ExpandCircleDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 14.8q.275.275.7.275.425 0 .7-.275l3.1-3.1q.275-.275.275-.688 0-.412-.3-.712-.275-.275-.7-.275-.425 0-.7.275L12 12.675l-2.4-2.4Q9.325 10 8.913 10q-.413 0-.713.3-.275.275-.275.7 0 .425.275.7ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDownFilled.displayName = 'AmauiIconMaterialExpandCircleDownFilled';

export default IconMaterialExpandCircleDownFilled;
