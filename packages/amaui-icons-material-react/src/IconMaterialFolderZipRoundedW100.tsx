import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipRoundedW100'
      short_name='FolderZip'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.963 6.425Q11.25 6.55 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM16 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V8.8Q20 8.45 19.775 8.225Q19.55 8 19.2 8H16V10H18V12H16V14H18V16H16ZM4.8 18H14V16H16V14H14V12H16V10H14V8H11.725L10.95 7.225Q10.825 7.1 10.688 7.05Q10.55 7 10.4 7H4.8Q4.45 7 4.225 7.225Q4 7.45 4 7.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4 8V7.225Q4 7.1 4 7.05Q4 7 4 7Q4 7 4 7.225Q4 7.45 4 7.8V17.2Q4 17.55 4 17.775Q4 18 4 18Q4 18 4 17.775Q4 17.55 4 17.2V8.8Q4 8.45 4 8.225Q4 8 4 8Z"/>
    </Icon>
  );
});

IconMaterialFolderZipRoundedW100.displayName = 'AmauiIconMaterialFolderZipRoundedW100';

export default IconMaterialFolderZipRoundedW100;
