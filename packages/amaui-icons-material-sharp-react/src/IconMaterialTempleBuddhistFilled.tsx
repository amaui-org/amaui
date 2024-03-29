import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleBuddhistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistFilled'

      short_name='TempleBuddhist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 6 12 1l3.75 5ZM6 10V8.85q-1.3-.325-2.15-1.375Q3 6.425 3 5.025h2q0 .8.588 1.387Q6.175 7 6.975 7h10.05q.8 0 1.388-.588Q19 5.825 19 5.025h2q0 1.4-.85 2.45Q19.3 8.525 18 8.85V10ZM4 22v-9.15q-1.3-.325-2.15-1.375Q1 10.425 1 9.025h2q0 .8.587 1.387.588.588 1.388.588h14.05q.8 0 1.388-.588Q21 9.825 21 9.025h2q0 1.4-.85 2.45-.85 1.05-2.15 1.375V22h-7v-5h-2v5Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistFilled.displayName = 'AmauiIconMaterialTempleBuddhistFilled';

export default IconMaterialTempleBuddhistFilled;
