import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonePaused = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonePaused'

      short_name='PhonePaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 10V3h2v7Zm4 0V3h2v7Zm.95 11q-3.225 0-6.287-1.425-3.063-1.425-5.425-3.8-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9 5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025.225 1 .65 1.975Zm8.95 8.95q.975.425 1.988.675 1.012.25 2.037.325v-2.2l-2.35-.475ZM6.025 9Zm8.95 8.95Z"/>
    </Icon>
  );
});

IconMaterialPhonePaused.displayName = 'AmauiIconMaterialPhonePaused';

export default IconMaterialPhonePaused;
