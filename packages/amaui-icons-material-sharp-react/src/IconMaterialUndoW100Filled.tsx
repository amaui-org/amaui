import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUndoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoW100Filled'

      short_name='Undo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.975 18.35h-6.45v-.7h6.45q1.85 0 3.2-1.175t1.35-2.975q0-1.8-1.35-2.975t-3.2-1.175h-7.85l3.25 3.25-.5.5-4.1-4.1 4.1-4.1.5.5-3.25 3.25h7.85q2.125 0 3.688 1.387 1.562 1.388 1.562 3.463t-1.562 3.462Q16.1 18.35 13.975 18.35Z"/>
    </Icon>
  );
});

IconMaterialUndoW100Filled.displayName = 'AmauiIconMaterialUndoW100Filled';

export default IconMaterialUndoW100Filled;
