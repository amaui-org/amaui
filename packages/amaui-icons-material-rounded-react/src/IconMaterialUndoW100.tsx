import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUndoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoW100'

      short_name='Undo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.875 18.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.1q1.85 0 3.2-1.175t1.35-2.975q0-1.8-1.35-2.975t-3.2-1.175h-7.85l3 3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125L5.3 9.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L8.625 5.15q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-3 3h7.85q2.125 0 3.688 1.387 1.562 1.388 1.562 3.463t-1.562 3.462Q16.1 18.35 13.975 18.35Z"/>
    </Icon>
  );
});

IconMaterialUndoW100.displayName = 'AmauiIconMaterialUndoW100';

export default IconMaterialUndoW100;
