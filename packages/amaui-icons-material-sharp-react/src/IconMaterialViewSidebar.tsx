import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebar'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM17.5 8.675H20V6h-2.5Zm0 4.65H20v-2.65h-2.5ZM4 18h11.5V6H4Zm13.5 0H20v-2.675h-2.5Z"/>
    </Icon>
  );
});

IconMaterialViewSidebar.displayName = 'AmauiIconMaterialViewSidebar';

export default IconMaterialViewSidebar;
