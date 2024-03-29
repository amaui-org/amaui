import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberDvrFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvrFilled'

      short_name='FiberDvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15h1.5v-2h1.15l.85 2H20l-.9-2.1h.9V9h-5Zm1.5-3.5v-1h2v1ZM11.1 15h1.5l1.75-6h-1.5l-1 3.45-1-3.45h-1.5ZM4 15h3.5q.65 0 1.075-.425Q9 14.15 9 13.5v-3q0-.65-.425-1.075Q8.15 9 7.5 9H4Zm1.5-1.5v-3h2v3ZM1 20V4h22v16Z"/>
    </Icon>
  );
});

IconMaterialFiberDvrFilled.displayName = 'AmauiIconMaterialFiberDvrFilled';

export default IconMaterialFiberDvrFilled;
