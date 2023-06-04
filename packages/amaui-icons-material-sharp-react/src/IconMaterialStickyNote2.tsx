import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 14h5V5H5v14h9ZM3 21V3h18v12l-6 6Zm4-7v-2h5v2Zm0-4V8h10v2Zm-2 9V5v14Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2.displayName = 'AmauiIconMaterialStickyNote2';

export default IconMaterialStickyNote2;
