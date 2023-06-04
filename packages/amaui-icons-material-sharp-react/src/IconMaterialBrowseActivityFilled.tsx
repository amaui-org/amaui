import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityFilled'

      short_name='BrowseActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15 1.4-3.1 3.1-1.4-3.1-1.4L12 6l-1.4 3.1-3.1 1.4 3.1 1.4ZM2 18V3h20v15Zm-1 3v-2h22v2Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityFilled.displayName = 'AmauiIconMaterialBrowseActivityFilled';

export default IconMaterialBrowseActivityFilled;
