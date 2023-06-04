import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.7q-.575 0-.962-.388-.388-.387-.388-.962V7.8q0-.575.463-1.038Q4.225 6.3 4.8 6.3h5.925q.125 0 .25.05t.225.15l.8.8h7.2q.425 0 .75.188.325.187.525.512h-8.75l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8v9.4q0 .275.138.45.137.175.362.3l2.225-7.45q.075-.225.263-.363Q7.175 10 7.4 10h14.475q.35 0 .563.275.212.275.112.625l-2.05 6.85q-.125.425-.487.688-.363.262-.813.262Zm.575-.7H19.7l2.175-7.3H7.4Zm0 0L7.4 10.7 5.225 18ZM4 9.5V7v2.5Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100.displayName = 'AmauiIconMaterialFolderOpenW100';

export default IconMaterialFolderOpenW100;
