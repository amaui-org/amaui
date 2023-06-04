import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventRepeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeatW100Filled'

      short_name='EventRepeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 20.7q-.625 0-1.062-.438Q4.3 19.825 4.3 19.2V6.8q0-.625.438-1.062Q5.175 5.3 5.8 5.3h2V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h7V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.625 0 1.063.438.437.437.437 1.062v5.6H19v-1.6H5v8.4q0 .35.225.575Q5.45 20 5.8 20h6.575v.7ZM19 23.6q-1.4 0-2.525-.75T14.8 20.9q-.1-.2.012-.35.113-.15.338-.15.1 0 .175.062.075.063.125.138.45 1.05 1.4 1.675T19 22.9q1.625 0 2.763-1.138Q22.9 20.625 22.9 19t-1.137-2.762Q20.625 15.1 19 15.1q-.975 0-1.875.5t-1.55 1.3h1.675q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.1q-.325 0-.537-.212-.213-.213-.213-.538v-2.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.625q.725-.875 1.75-1.425T19 14.4q1.9 0 3.25 1.35T23.6 19q0 1.9-1.35 3.25T19 23.6Z"/>
    </Icon>
  );
});

IconMaterialEventRepeatW100Filled.displayName = 'AmauiIconMaterialEventRepeatW100Filled';

export default IconMaterialEventRepeatW100Filled;
