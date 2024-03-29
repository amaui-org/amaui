import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocketLaunchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchFilled'

      short_name='RocketLaunch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.45 10.575 4.2-4.2q.35-.35.825-.5.475-.15.975-.05l1.3.275Q8.4 7.7 7.625 9q-.775 1.3-1.5 3.15Zm5.125 2.275q.575-1.8 1.562-3.4.988-1.6 2.388-3 2.2-2.2 5.025-3.288 2.825-1.087 5.275-.662.425 2.45-.65 5.275T17.9 12.8q-1.375 1.375-3 2.388-1.625 1.012-3.425 1.587Zm6.9-3q.575.575 1.413.575.837 0 1.412-.575t.575-1.413q0-.837-.575-1.412t-1.412-.575q-.838 0-1.413.575-.575.575-.575 1.412 0 .838.575 1.413Zm-.7 12.025-1.6-3.675q1.85-.725 3.163-1.5 1.312-.775 2.912-2.125l.25 1.3q.1.5-.05.988-.15.487-.5.837ZM4.05 16.05q.875-.875 2.125-.888 1.25-.012 2.125.863t.875 2.125q0 1.25-.875 2.125-.625.625-2.087 1.075-1.463.45-4.038.8.35-2.575.8-4.025.45-1.45 1.075-2.075Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchFilled.displayName = 'AmauiIconMaterialRocketLaunchFilled';

export default IconMaterialRocketLaunchFilled;
