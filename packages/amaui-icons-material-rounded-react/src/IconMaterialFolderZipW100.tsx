import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipW100'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM16 18h3.2q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8H16v2h2v2h-2v2h2v2h-2ZM4.8 18H14v-2h2v-2h-2v-2h2v-2h-2V8h-2.275l-.775-.775q-.125-.125-.262-.175Q10.55 7 10.4 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18ZM4 8V7v11V8Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100.displayName = 'AmauiIconMaterialFolderZipW100';

export default IconMaterialFolderZipW100;
