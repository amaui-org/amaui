import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipRoundedW100Filled'
      short_name='FolderZip'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.963 6.425Q11.25 6.55 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM14 18H16V16H18V14H16V12H18V10H16V8H14V10H16V12H14V14H16V16H14Z"/>
    </Icon>
  );
});

IconMaterialFolderZipRoundedW100Filled.displayName = 'AmauiIconMaterialFolderZipRoundedW100Filled';

export default IconMaterialFolderZipRoundedW100Filled;
