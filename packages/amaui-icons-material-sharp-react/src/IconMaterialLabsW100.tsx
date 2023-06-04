import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100'

      short_name='Labs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.975q-1.65 0-2.8-1.15t-1.15-2.8V7.2H6.8V3.05h10.4V7.2h-1.25l-.025 9.175q-.125 1.525-1.237 2.563-1.113 1.037-2.688 1.037ZM7.5 6.5h9V3.75h-9ZM12 19.275q1.275 0 2.188-.837.912-.838 1.037-2.063H12.65v-.7h2.6v-2.3h-2.6v-.7h2.6v-2.3h-2.6v-.7h2.6V7.2h-6.5v8.825q0 1.35.95 2.3.95.95 2.3.95ZM7.5 6.5V3.75 6.5Z"/>
    </Icon>
  );
});

IconMaterialLabsW100.displayName = 'AmauiIconMaterialLabsW100';

export default IconMaterialLabsW100;
