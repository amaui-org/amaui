import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityW100'

      short_name='BrowseActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.75.95-2.3 2.3-.95-2.3-.95-.95-2.3-.95 2.3-2.3.95 2.3.95ZM3.3 16.7V4.3h17.4v12.4ZM4 16h16V5H4Zm-2 2.4v-.7h20v.7ZM4 16V5v11Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityW100.displayName = 'AmauiIconMaterialBrowseActivityW100';

export default IconMaterialBrowseActivityW100;
