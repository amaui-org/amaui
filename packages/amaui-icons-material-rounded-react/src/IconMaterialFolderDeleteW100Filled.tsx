import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100Filled'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 16.6h2.5q.45 0 .775-.325t.325-.775v-4.9h.4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.9q0-.225-.15-.363-.15-.137-.425-.137h-.55q-.275 0-.425.137-.15.138-.15.363h-1.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h.4v4.9q0 .45.325.775t.775.325Zm0-.7q-.175 0-.287-.113-.113-.112-.113-.287v-4.9h3.3v4.9q0 .175-.112.287-.113.113-.288.113ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100Filled.displayName = 'AmauiIconMaterialFolderDeleteW100Filled';

export default IconMaterialFolderDeleteW100Filled;
