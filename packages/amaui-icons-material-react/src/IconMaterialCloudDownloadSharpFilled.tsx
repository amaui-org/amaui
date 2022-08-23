import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudDownloadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadSharpFilled'
      short_name='CloudDownload'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.825 7.125 7.388 5.75Q8.95 4.375 11 4.075V12.15L9.4 10.6L8 12L12 16L16 12L14.6 10.6L13 12.15V4.075Q15.575 4.425 17.288 6.387Q19 8.35 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadSharpFilled.displayName = 'AmauiIconMaterialCloudDownloadSharpFilled';

export default IconMaterialCloudDownloadSharpFilled;
