import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoad'

      short_name='RemoveRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="9" width="2" x="18" y="4"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="11" y="4"/><rect height="4" width="2" x="11" y="10"/><rect height="4" width="2" x="11" y="16"/><polygon points="22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5"/></g></g>
    </Icon>
  );
});

IconMaterialRemoveRoad.displayName = 'AmauiIconMaterialRemoveRoad';

export default IconMaterialRemoveRoad;
