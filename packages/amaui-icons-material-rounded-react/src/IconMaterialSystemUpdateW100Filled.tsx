import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateW100Filled'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.8q-.15 0-.275-.05-.125-.05-.25-.175L9.15 12.25q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2 2v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5l2-2q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Zm-4.2 6.9q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateW100Filled.displayName = 'AmauiIconMaterialSystemUpdateW100Filled';

export default IconMaterialSystemUpdateW100Filled;
