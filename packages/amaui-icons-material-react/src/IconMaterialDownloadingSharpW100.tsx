import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingSharpW100'
      short_name='Downloading'

      {...props}
    >
      <path d="M16.9 18.35 17.45 18.85Q16.45 19.575 15.325 20.012Q14.2 20.45 13 20.65V19.95Q14.075 19.8 15.062 19.413Q16.05 19.025 16.9 18.35ZM20.65 13Q20.5 14.2 20.038 15.325Q19.575 16.45 18.85 17.4L18.35 16.9Q19 16.05 19.4 15.062Q19.8 14.075 19.95 13ZM18.9 6.55Q19.575 7.55 20.013 8.675Q20.45 9.8 20.65 11H19.95Q19.8 9.925 19.4 8.938Q19 7.95 18.35 7.1ZM11.025 3.35V4.05Q8.025 4.475 6.037 6.725Q4.05 8.975 4.05 12Q4.05 15.025 6.025 17.275Q8 19.525 11 19.95V20.65Q9.35 20.475 7.95 19.725Q6.55 18.975 5.525 17.812Q4.5 16.65 3.925 15.15Q3.35 13.65 3.35 12Q3.35 8.65 5.538 6.175Q7.725 3.7 11.025 3.35ZM13.025 3.35Q14.225 3.525 15.338 3.975Q16.45 4.425 17.45 5.15L16.95 5.7Q16.075 5.05 15.088 4.625Q14.1 4.2 13.025 4.05ZM12 16.1 7.9 12 8.4 11.5 11.65 14.75V7.9H12.35V14.75L15.6 11.5L16.1 12Z"/>
    </Icon>
  );
});

IconMaterialDownloadingSharpW100.displayName = 'AmauiIconMaterialDownloadingSharpW100';

export default IconMaterialDownloadingSharpW100;
