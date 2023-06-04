import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSharedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedW100'

      short_name='FolderShared'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 12.6q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q15.575 9.9 15 9.9t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-3.1 3.5h6.2v-.05q0-.8-.812-1.225Q16.475 14.4 15 14.4q-1.475 0-2.287.425-.813.425-.813 1.225Zm-7.1 2.6q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedW100.displayName = 'AmauiIconMaterialFolderSharedW100';

export default IconMaterialFolderSharedW100;
