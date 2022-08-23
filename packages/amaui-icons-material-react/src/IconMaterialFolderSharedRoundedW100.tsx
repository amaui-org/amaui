import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharedRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedRoundedW100'
      short_name='FolderShared'

      {...props}
    >
      <path d="M15 12.6Q15.575 12.6 15.963 12.212Q16.35 11.825 16.35 11.25Q16.35 10.675 15.963 10.287Q15.575 9.9 15 9.9Q14.425 9.9 14.038 10.287Q13.65 10.675 13.65 11.25Q13.65 11.825 14.038 12.212Q14.425 12.6 15 12.6ZM11.9 16.1H18.1V16.05Q18.1 15.25 17.288 14.825Q16.475 14.4 15 14.4Q13.525 14.4 12.713 14.825Q11.9 15.25 11.9 16.05ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.963 6.425Q11.25 6.55 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4 7.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V8.8Q20 8.45 19.775 8.225Q19.55 8 19.2 8H11.725L10.725 7H4.8Q4.45 7 4.225 7.225Q4 7.45 4 7.8ZM4 7.8Q4 7.45 4 7.225Q4 7 4 7V8Q4 8 4 8.225Q4 8.45 4 8.8V17.2Q4 17.55 4 17.775Q4 18 4 18Q4 18 4 17.775Q4 17.55 4 17.2Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedRoundedW100.displayName = 'AmauiIconMaterialFolderSharedRoundedW100';

export default IconMaterialFolderSharedRoundedW100;
