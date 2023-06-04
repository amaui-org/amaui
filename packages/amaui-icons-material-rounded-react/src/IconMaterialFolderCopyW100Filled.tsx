import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100Filled'

      short_name='FolderCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 19.4q-.625 0-1.062-.438Q2.3 18.525 2.3 17.9V9.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.85q0 .35.225.575.225.225.575.225h14.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.7-2.7q-.625 0-1.062-.438Q5 15.825 5 15.2V4.8q0-.625.438-1.063Q5.875 3.3 6.5 3.3h4.875q.3 0 .588.125.287.125.487.325l.55.55h7.2q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100Filled.displayName = 'AmauiIconMaterialFolderCopyW100Filled';

export default IconMaterialFolderCopyW100Filled;
