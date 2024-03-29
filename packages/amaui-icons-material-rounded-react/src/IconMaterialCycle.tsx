import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCycle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cycle'

      short_name='Cycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.85 19.125q-2.6-1.2-4.238-3.625-1.637-2.425-1.637-5.475 0-.65.075-1.275.075-.625.225-1.225l-1.15.675-1-1.725L4.9 3.725l2.75 4.75-1.75 1-1.35-2.35q-.275.675-.412 1.4Q4 9.25 4 10.025q0 2.425 1.325 4.413 1.325 1.987 3.525 2.937ZM15.5 7V5h2.725q-1.15-1.425-2.775-2.213Q13.825 2 12 2q-1.375 0-2.6.425t-2.25 1.2l-1-1.75Q7.4 1 8.863.5q1.462-.5 3.112-.5 1.975 0 3.787.737 1.813.738 3.238 2.138V1.5h2V7Zm-.65 15-4.775-2.75 2.75-4.75 1.725 1-1.425 2.45q2.95-.425 4.913-2.663Q20 13.05 20 10.025q0-.275-.012-.525-.013-.25-.063-.5h2.025q.025.25.038.488Q22 9.725 22 10q0 3.375-2.012 6.038-2.013 2.662-5.238 3.587l1.1.65Z"/>
    </Icon>
  );
});

IconMaterialCycle.displayName = 'AmauiIconMaterialCycle';

export default IconMaterialCycle;
