import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadRounded'
      short_name='FontDownload'

      {...props}
    >
      <path d="M7.8 18Q8.075 18 8.35 17.825Q8.625 17.65 8.725 17.375L9.6 14.95H14.4L15.275 17.375Q15.375 17.65 15.637 17.825Q15.9 18 16.2 18Q16.775 18 17.038 17.613Q17.3 17.225 17.1 16.675L13.425 6.975Q13.275 6.575 12.863 6.287Q12.45 6 12 6Q11.575 6 11.15 6.287Q10.725 6.575 10.575 6.975L6.9 16.675Q6.7 17.225 6.963 17.613Q7.225 18 7.8 18ZM10.2 13.2 11.95 8.25H12.05L13.8 13.2ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20ZM4 4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadRounded.displayName = 'AmauiIconMaterialFontDownloadRounded';

export default IconMaterialFontDownloadRounded;
