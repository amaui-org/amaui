import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleBuddhist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhist'

      short_name='TempleBuddhist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-9.15q-1.3-.325-2.15-1.375Q1 10.425 1 9.025h2q0 .8.587 1.387.588.588 1.388.588H6V8.85q-1.3-.325-2.15-1.375Q3 6.425 3 5.025h2q0 .8.588 1.387Q6.175 7 6.975 7H7.5L12 1l4.5 6h.525q.8 0 1.388-.588Q19 5.825 19 5.025h2q0 1.4-.85 2.45Q19.3 8.525 18 8.85V11h1.025q.8 0 1.388-.588Q21 9.825 21 9.025h2q0 1.4-.85 2.45-.85 1.05-2.15 1.375V22h-7v-5h-2v5Zm6-15h4l-2-2.675Zm-2 4h8V9H8Zm-2 9h3v-5h6v5h3v-7H6Zm6-7Zm0-6Zm0 4Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhist.displayName = 'AmauiIconMaterialTempleBuddhist';

export default IconMaterialTempleBuddhist;
