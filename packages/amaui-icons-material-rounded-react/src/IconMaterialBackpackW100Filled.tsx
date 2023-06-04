import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackW100Filled'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.85q-.625 0-1.062-.437-.438-.438-.438-1.063V8q0-1.275.85-2.238Q7 4.8 8.3 4.65V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15h4V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15q1.3.15 2.15 1.112.85.963.85 2.238v11.35q0 .625-.438 1.063-.437.437-1.062.437Zm8.85-5.5q.15 0 .25-.1T16 15v-1.6q0-.325-.212-.538-.213-.212-.538-.212h-6.9q-.15 0-.25.1T8 13q0 .15.1.25t.25.1h6.95V15q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialBackpackW100Filled.displayName = 'AmauiIconMaterialBackpackW100Filled';

export default IconMaterialBackpackW100Filled;
