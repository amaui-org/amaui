import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleBuddhistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistW100Filled'

      short_name='TempleBuddhist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 6.95 12 2.075l3.65 4.875Zm-1.7 4v-2.6q-1.125-.225-1.887-.912Q4 6.75 3.725 5.675h.7q.25.825.95 1.4t1.6.575h10.05q.9 0 1.6-.575.7-.575.95-1.4h.7q-.2 1.05-.975 1.737-.775.688-1.95.938v2.6Zm-2 10.4v-9q-1.125-.175-1.912-.888-.788-.712-1.013-1.787h.7q.25.825.95 1.4t1.6.575h14.05q.9 0 1.6-.575.7-.575.95-1.4h.7q-.175 1.05-.963 1.763-.787.712-1.962.912v9h-5.7v-5h-3.3v5Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistW100Filled.displayName = 'AmauiIconMaterialTempleBuddhistW100Filled';

export default IconMaterialTempleBuddhistW100Filled;
