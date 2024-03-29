import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyFilled'

      short_name='Key'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15q1.25 0 2.125-.875T10 12q0-1.25-.875-2.125T7 9q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15Zm0 3q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6q2.025 0 3.538 1.15Q12.05 8.3 12.65 10H21l2 1.95L19 16l-2-2-2 2-2-2h-.35q-.625 1.8-2.175 2.9Q8.925 18 7 18Z"/>
    </Icon>
  );
});

IconMaterialKeyFilled.displayName = 'AmauiIconMaterialKeyFilled';

export default IconMaterialKeyFilled;
