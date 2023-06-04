import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarFilled'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 8V4h4v4Zm0 6v-4h4v4ZM2 20V4h14v16Zm16 0v-4h4v4Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarFilled.displayName = 'AmauiIconMaterialViewSidebarFilled';

export default IconMaterialViewSidebarFilled;
