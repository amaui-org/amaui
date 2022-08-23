import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadRoundedW100Filled'
      short_name='FontDownload'

      {...props}
    >
      <path d="M8.225 17.45Q8.35 17.45 8.438 17.375Q8.525 17.3 8.575 17.2L9.55 14.45H14.45L15.425 17.2Q15.475 17.3 15.562 17.375Q15.65 17.45 15.775 17.45Q15.975 17.45 16.075 17.325Q16.175 17.2 16.1 17L12.325 6.475Q12.275 6.375 12.2 6.312Q12.125 6.25 12 6.25Q11.9 6.25 11.812 6.312Q11.725 6.375 11.675 6.475L7.9 17Q7.825 17.2 7.925 17.325Q8.025 17.45 8.225 17.45ZM9.8 13.75 11.95 7.7H12.05L14.2 13.75ZM4.8 20.7Q4.175 20.7 3.737 20.262Q3.3 19.825 3.3 19.2V4.8Q3.3 4.175 3.737 3.737Q4.175 3.3 4.8 3.3H19.2Q19.825 3.3 20.263 3.737Q20.7 4.175 20.7 4.8V19.2Q20.7 19.825 20.263 20.262Q19.825 20.7 19.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadRoundedW100Filled.displayName = 'AmauiIconMaterialFontDownloadRoundedW100Filled';

export default IconMaterialFontDownloadRoundedW100Filled;
