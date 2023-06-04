import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100Filled'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM16.7 8.45h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4ZM8 15.85q-1.125 0-1.912-.788-.788-.787-.788-1.912v-7.2q0-.625.438-1.063.437-.437 1.062-.437h2.35V6.4L7.7 7.6q-.05.05-.2.4v2.65q0 .2.15.35.15.15.35.15h3q.2 0 .35-.15.15-.15.15-.35V8q0-.05-.2-.4L9.85 6.4V4.45h8.25q.65 0 1.075.425.425.425.425 1.075v1.7q0 .65-.425 1.075-.425.425-1.075.425h-1.4v4q0 1.125-.788 1.912-.787.788-1.912.788Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100Filled.displayName = 'AmauiIconMaterialEmojiFoodBeverageW100Filled';

export default IconMaterialEmojiFoodBeverageW100Filled;
