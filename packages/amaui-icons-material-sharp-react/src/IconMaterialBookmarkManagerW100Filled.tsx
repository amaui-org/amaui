import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100Filled'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M583 924v-40l174-173 40 40-174 173h-40Zm233-193-39-40 48-48 39 40-48 48ZM132 844V348h308l40 40h348v111L483 844H132Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100Filled.displayName = 'AmauiIconMaterialBookmarkManagerW100Filled';

export default IconMaterialBookmarkManagerW100Filled;
