import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudDownloadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadRoundedFilled'
      short_name='CloudDownload'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.825 7.125 7.388 5.75Q8.95 4.375 11 4.075V12.15L10.1 11.275Q9.825 11 9.413 11Q9 11 8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7L11.3 15.3Q11.6 15.6 12 15.6Q12.4 15.6 12.7 15.3L15.3 12.7Q15.575 12.425 15.588 12.012Q15.6 11.6 15.3 11.3Q15.025 11.025 14.613 11.012Q14.2 11 13.9 11.275L13 12.15V4.075Q15.575 4.425 17.288 6.387Q19 8.35 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadRoundedFilled.displayName = 'AmauiIconMaterialCloudDownloadRoundedFilled';

export default IconMaterialCloudDownloadRoundedFilled;
