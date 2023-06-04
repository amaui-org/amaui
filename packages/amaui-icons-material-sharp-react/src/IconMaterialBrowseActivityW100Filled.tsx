import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityW100Filled'

      short_name='BrowseActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.75.95-2.3 2.3-.95-2.3-.95-.95-2.3-.95 2.3-2.3.95 2.3.95ZM3.3 16.7V4.3h17.4v12.4ZM2 18.4v-.7h20v.7Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityW100Filled.displayName = 'AmauiIconMaterialBrowseActivityW100Filled';

export default IconMaterialBrowseActivityW100Filled;
