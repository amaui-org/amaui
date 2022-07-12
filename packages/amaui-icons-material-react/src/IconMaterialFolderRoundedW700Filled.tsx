import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderRoundedW700Filled'
      short_name='Folder'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.6 2.062 3.687Q2.975 2.775 4.3 2.775H8.325Q8.95 2.775 9.525 3.025Q10.1 3.275 10.525 3.7L12 5.15H19.7Q21.025 5.15 21.938 6.062Q22.85 6.975 22.85 8.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFolderRoundedW700Filled;
