import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlPointDuplicateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicateW100Filled'

      short_name='ControlPointDuplicate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 15.1h.7v-2.75h2.75v-.7h-2.75V8.9h-.7v2.75H11.9v.7h2.75ZM6 19.1q-2.125-.95-3.413-2.863Q1.3 14.325 1.3 12t1.287-4.238Q3.875 5.85 6 4.9v.8q-1.85.875-2.925 2.575Q2 9.975 2 12q0 2.025 1.075 3.725Q4.15 17.425 6 18.3Zm9 .6q-1.6 0-3-.6t-2.45-1.65Q8.5 16.4 7.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q10.6 5.5 12 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q21.5 7.6 22.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q19.4 18.5 18 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateW100Filled.displayName = 'AmauiIconMaterialControlPointDuplicateW100Filled';

export default IconMaterialControlPointDuplicateW100Filled;
