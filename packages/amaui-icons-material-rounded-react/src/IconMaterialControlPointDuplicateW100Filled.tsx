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
      <path d="M15 15.1q.15 0 .25-.1t.1-.25v-2.4h2.4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.4v-2.4q0-.15-.1-.25T15 8.9q-.15 0-.25.1t-.1.25v2.4h-2.4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.4v2.4q0 .15.1.25t.25.1Zm-9.55 3.725q-1.9-1.05-3.025-2.85T1.3 12q0-2.175 1.125-3.975 1.125-1.8 3.025-2.85.225-.125.388-.038Q6 5.225 6 5.5q0 .075-.05.15t-.125.125q-1.775.875-2.8 2.562Q2 10.025 2 12q0 1.975 1.025 3.663 1.025 1.687 2.8 2.562.075.05.125.125t.05.15q0 .25-.162.35-.163.1-.388-.025ZM15 19.7q-1.6 0-3-.6t-2.45-1.65Q8.5 16.4 7.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q10.6 5.5 12 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q21.5 7.6 22.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q19.4 18.5 18 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateW100Filled.displayName = 'AmauiIconMaterialControlPointDuplicateW100Filled';

export default IconMaterialControlPointDuplicateW100Filled;
