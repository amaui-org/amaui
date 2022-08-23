import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffRoundedW100Filled'
      short_name='FolderOff'

      {...props}
    >
      <path d="M20.6 17.775 9.125 6.3H10.375Q10.675 6.3 10.963 6.425Q11.25 6.55 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.225Q20.7 17.4 20.675 17.525Q20.65 17.65 20.6 17.775ZM20.65 21.65 17.7 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H5.3L3.35 4.35Q3.225 4.225 3.225 4.1Q3.225 3.975 3.35 3.85Q3.475 3.725 3.6 3.725Q3.725 3.725 3.85 3.85L21.15 21.15Q21.25 21.25 21.25 21.387Q21.25 21.525 21.15 21.65Q21.05 21.775 20.913 21.775Q20.775 21.775 20.65 21.65Z"/>
    </Icon>
  );
});

IconMaterialFolderOffRoundedW100Filled.displayName = 'AmauiIconMaterialFolderOffRoundedW100Filled';

export default IconMaterialFolderOffRoundedW100Filled;
