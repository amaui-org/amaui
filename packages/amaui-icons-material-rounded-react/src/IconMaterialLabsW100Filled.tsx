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
      <path d="M12 19.975q-1.65 0-2.8-1.15t-1.15-2.8V7.2q-.625 0-1.062-.438Q6.55 6.325 6.55 5.7V4.55q0-.625.438-1.063.437-.437 1.062-.437h7.9q.625 0 1.062.437.438.438.438 1.063V5.7q0 .625-.438 1.062-.437.438-1.062.438l-.025 9.175q-.125 1.525-1.237 2.563-1.113 1.037-2.688 1.037Zm0-.7q1.275 0 2.188-.837.912-.838 1.037-2.063H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.25v-2.3H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.25v-2.3H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.25V7.2h-6.5v8.825q0 1.35.95 2.3.95.95 2.3.95Z"/>
    </Icon>
  );
});

IconMaterialLabsW100Filled.displayName = 'AmauiIconMaterialLabsW100Filled';

export default IconMaterialLabsW100Filled;
