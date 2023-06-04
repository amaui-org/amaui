import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveToInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxW100'

      short_name='MoveToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14v-3.5h-3.75q-.5.95-1.363 1.475-.862.525-1.887.525t-1.887-.525Q9.25 16.45 8.75 15.5H5Zm7-2.2q.95 0 1.725-.55.775-.55 1.075-1.45H19V5H5v9.8h4.2q.3.9 1.075 1.45.775.55 1.725.55Zm0-3.7L8.9 10l.5-.5 2.25 2.25V6.9h.7v4.85L14.6 9.5l.5.5ZM5 19h14Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxW100.displayName = 'AmauiIconMaterialMoveToInboxW100';

export default IconMaterialMoveToInboxW100;
