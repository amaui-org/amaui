import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorW100Filled'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.8 15.3 7.55 5.05l3.925-1.45q.25-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 .95-.2 1.975-.2 1.025-.7 2.225Zm1.75 5.25L16.5 17.5q-.75.95-1.75 1.725-1 .775-2.1 1.2-.125.05-.287.075-.163.025-.363.025-.2 0-.362-.025-.163-.025-.288-.075-2.775-1.125-4.412-3.713Q5.3 14.125 5.3 11.1V6.3L3.55 4.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16 16q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorW100Filled.displayName = 'AmauiIconMaterialRemoveModeratorW100Filled';

export default IconMaterialRemoveModeratorW100Filled;
