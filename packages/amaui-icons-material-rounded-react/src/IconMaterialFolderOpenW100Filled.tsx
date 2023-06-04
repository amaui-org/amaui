import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100Filled'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.7q-.575 0-.962-.388-.388-.387-.388-.962V7.8q0-.575.463-1.038Q4.225 6.3 4.8 6.3h5.925q.125 0 .25.05t.225.15l.8.8h7.2q.425 0 .75.188.325.187.525.512H5.5q-.625 0-1.062.438Q4 8.875 4 9.5v7.7q0 .275.138.45.137.175.362.3l2.225-7.45q.075-.225.263-.363Q7.175 10 7.4 10h14.475q.35 0 .563.275.212.275.112.625l-2.05 6.85q-.125.425-.487.688-.363.262-.813.262Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100Filled.displayName = 'AmauiIconMaterialFolderOpenW100Filled';

export default IconMaterialFolderOpenW100Filled;
