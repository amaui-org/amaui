import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffW100Filled'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-244 484-588h284q25 0 42.5 17.5T828-528v284ZM272-800l-28-28h284q25 0 42.5 17.5T588-768v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66q0-13-9.5-22.5T528-800H272Zm160 668q-26 0-43-17t-17-43v-356L160-760v328q0 14 9 23t23 9h66q6 0 10 4t4 10q0 6-4 10t-10 4h-66q-26 0-43-17t-17-43v-356l-10-10q-4-4-4.5-9.5T122-818q5-5 10-5t10 5l676 676q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5l-10-10H432Z"/>
    </Icon>
  );
});

IconMaterialStackOffW100Filled.displayName = 'AmauiIconMaterialStackOffW100Filled';

export default IconMaterialStackOffW100Filled;
