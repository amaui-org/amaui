import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknown2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown2'

      short_name='Unknown2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-64-24.5-122.5T706-706L254-254q45 45 103.5 69.5T480-160Zm0-160v-60h200v60H480ZM320-500h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Z"/>
    </Icon>
  );
});

IconMaterialUnknown2.displayName = 'AmauiIconMaterialUnknown2';

export default IconMaterialUnknown2;
