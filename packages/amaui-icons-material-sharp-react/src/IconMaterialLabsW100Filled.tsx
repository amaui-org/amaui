import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100Filled'

      short_name='Labs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.75 19.975q-1.65 0-2.8-1.15t-1.15-2.8V7.2H6.55V3.05h10.4V7.2H15.7l-.025 9.175q-.125 1.525-1.237 2.563-1.113 1.037-2.688 1.037Zm0-.7q1.275 0 2.188-.837.912-.838 1.037-2.063H12.4v-.7H15v-2.3h-2.6v-.7H15v-2.3h-2.6v-.7H15V7.2H8.5v8.825q0 1.35.95 2.3.95.95 2.3.95Z"/>
    </Icon>
  );
});

IconMaterialLabsW100Filled.displayName = 'AmauiIconMaterialLabsW100Filled';

export default IconMaterialLabsW100Filled;
