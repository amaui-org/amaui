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
      <path d="M7 15q1.25 0 2.125-.875T10 12q0-1.25-.875-2.125T7 9q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15Zm0 3q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6q2.025 0 3.538 1.15Q12.05 8.3 12.65 10h7.95q.2 0 .388.075.187.075.312.2l.975.975q.15.15.225.337.075.188.075.388t-.062.375q-.063.175-.213.325l-2.6 2.6q-.15.15-.325.225-.175.075-.375.075t-.375-.063q-.175-.062-.325-.212L17 14l-1.3 1.3q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212L13 14h-.35q-.625 1.8-2.175 2.9Q8.925 18 7 18Z"/>
    </Icon>
  );
});

IconMaterialKeyFilled.displayName = 'AmauiIconMaterialKeyFilled';

export default IconMaterialKeyFilled;
