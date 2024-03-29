import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCutFilled'

      short_name='ContentCut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 21-7-7-2.35 2.35q.2.375.275.8.075.425.075.85 0 1.65-1.175 2.825Q7.65 22 6 22q-1.65 0-2.825-1.175Q2 19.65 2 18q0-1.65 1.175-2.825Q4.35 14 6 14q.425 0 .85.075t.8.275L10 12 7.65 9.65q-.375.2-.8.275Q6.425 10 6 10q-1.65 0-2.825-1.175Q2 7.65 2 6q0-1.65 1.175-2.825Q4.35 2 6 2q1.65 0 2.825 1.175Q10 4.35 10 6q0 .425-.075.85t-.275.8L22 20v1Zm-4-10-2-2 6-6h3v1ZM6 8q.825 0 1.412-.588Q8 6.825 8 6t-.588-1.412Q6.825 4 6 4t-1.412.588Q4 5.175 4 6t.588 1.412Q5.175 8 6 8Zm6 4.5q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363-.138-.137-.363-.137-.225 0-.363.137-.137.138-.137.363 0 .225.137.363.138.137.363.137ZM6 20q.825 0 1.412-.587Q8 18.825 8 18q0-.825-.588-1.413Q6.825 16 6 16t-1.412.587Q4 17.175 4 18q0 .825.588 1.413Q5.175 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialContentCutFilled.displayName = 'AmauiIconMaterialContentCutFilled';

export default IconMaterialContentCutFilled;
