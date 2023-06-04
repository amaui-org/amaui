import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderManagedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderManagedW100Filled'

      short_name='FolderManaged'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m691 893-2-28q-26-5-42-14t-30-26l-26 12-16-22 22-18q-8-24-8-46t8-46l-22-18 16-22 26 12q14-18 30-26.5t42-13.5l2-28h28l2 28q26 5 42 13.5t30 26.5l26-12 16 22-22 18q8 24 8 46t-8 46l22 18-16 22-26-12q-14 17-30 26t-42 14l-2 28h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-573 5V348h308l40 40h348v140q-29-16-60.5-24t-63.5-8q-106 0-180.5 74.5T449 751q0 24 3.5 47.5T466 844H132Z"/>
    </Icon>
  );
});

IconMaterialFolderManagedW100Filled.displayName = 'AmauiIconMaterialFolderManagedW100Filled';

export default IconMaterialFolderManagedW100Filled;
