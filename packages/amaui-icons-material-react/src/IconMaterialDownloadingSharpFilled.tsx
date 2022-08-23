import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingSharpFilled'
      short_name='Downloading'

      {...props}
    >
      <path d="M16.875 18.3 18.325 19.75Q17.15 20.675 15.8 21.238Q14.45 21.8 12.975 21.95V19.95Q14.05 19.8 15.038 19.375Q16.025 18.95 16.875 18.3ZM21.975 12.975Q21.775 14.45 21.225 15.812Q20.675 17.175 19.725 18.3L18.325 16.875Q18.975 16.025 19.375 15.037Q19.775 14.05 19.925 12.975ZM19.725 5.65Q20.675 6.775 21.25 8.137Q21.825 9.5 21.975 10.975H19.925Q19.775 9.9 19.375 8.912Q18.975 7.925 18.325 7.075ZM11 2V4Q7.975 4.425 6 6.687Q4.025 8.95 4.025 11.975Q4.025 15 6 17.262Q7.975 19.525 10.975 19.95V21.95Q9.075 21.75 7.438 20.887Q5.8 20.025 4.6 18.688Q3.4 17.35 2.713 15.625Q2.025 13.9 2.025 11.975Q2.025 8.1 4.588 5.262Q7.15 2.425 11 2ZM13 2Q14.475 2.15 15.825 2.712Q17.175 3.275 18.325 4.2L16.925 5.65Q16.05 5 15.062 4.575Q14.075 4.15 13 4ZM11.975 17 6.95 11.95 8.375 10.525 10.975 13.125V7H12.975V13.125L15.55 10.55L16.975 12Z"/>
    </Icon>
  );
});

IconMaterialDownloadingSharpFilled.displayName = 'AmauiIconMaterialDownloadingSharpFilled';

export default IconMaterialDownloadingSharpFilled;
