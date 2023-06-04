import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackW100'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.85q-.625 0-1.062-.437-.438-.438-.438-1.063V8q0-1.275.85-2.238Q7 4.8 8.3 4.65V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15h4V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15q1.3.15 2.15 1.112.85.963.85 2.238v11.35q0 .625-.438 1.063-.437.437-1.062.437Zm0-.7h10.4q.35 0 .575-.225Q18 19.7 18 19.35V8q0-1.1-.775-1.875-.775-.775-1.875-.775h-6.7q-1.1 0-1.875.775Q6 6.9 6 8v11.35q0 .35.225.575.225.225.575.225Zm8.85-4.8q.15 0 .25-.1T16 15v-1.6q0-.325-.212-.538-.213-.212-.538-.212h-6.9q-.15 0-.25.1T8 13q0 .15.1.25t.25.1h6.95V15q0 .15.1.25t.25.1ZM12 12.75Z"/>
    </Icon>
  );
});

IconMaterialBackpackW100.displayName = 'AmauiIconMaterialBackpackW100';

export default IconMaterialBackpackW100;
