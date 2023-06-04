import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCafeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100Filled'

      short_name='LocalCafe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8 15.85q-1.125 0-1.912-.788-.788-.787-.788-1.912v-7.2q0-.625.438-1.063.437-.437 1.062-.437h11.3q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.062-.438.438-1.063.438h-1.4v4q0 1.125-.788 1.912-.787.788-1.912.788Zm8.7-7.4h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100Filled.displayName = 'AmauiIconMaterialLocalCafeW100Filled';

export default IconMaterialLocalCafeW100Filled;
