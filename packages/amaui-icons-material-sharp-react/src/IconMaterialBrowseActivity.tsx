import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseActivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivity'

      short_name='BrowseActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15 1.4-3.1 3.1-1.4-3.1-1.4L12 6l-1.4 3.1-3.1 1.4 3.1 1.4ZM2 18V3h20v15Zm2-2h16V5H4Zm-3 5v-2h22v2Zm3-5V5v11Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivity.displayName = 'AmauiIconMaterialBrowseActivity';

export default IconMaterialBrowseActivity;
