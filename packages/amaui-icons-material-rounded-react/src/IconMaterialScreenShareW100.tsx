import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareW100'

      short_name='ScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 14.15q.15 0 .25-.1t.1-.25v-1.65q0-.675.488-1.162.487-.488 1.162-.488h2v.125q0 .275.238.387.237.113.437-.087l.5-.5q.05-.05.1-.275 0-.025-.1-.275l-.5-.5q-.2-.2-.437-.088-.238.113-.238.388V9.8h-2q-.975 0-1.662.687Q9 11.175 9 12.15v1.65q0 .15.1.25t.25.1ZM4.8 17.3q-.625 0-1.063-.437Q3.3 16.425 3.3 15.8V6.4q0-.625.437-1.063Q4.175 4.9 4.8 4.9h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.063-.438.437-1.063.437Zm0-.7h14.4q.35 0 .575-.225Q20 16.15 20 15.8V6.4q0-.35-.225-.575Q19.55 5.6 19.2 5.6H4.8q-.35 0-.575.225Q4 6.05 4 6.4v9.4q0 .35.225.575.225.225.575.225ZM2.35 19q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h19.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4 5.6v11-11Z"/>
    </Icon>
  );
});

IconMaterialScreenShareW100.displayName = 'AmauiIconMaterialScreenShareW100';

export default IconMaterialScreenShareW100;
