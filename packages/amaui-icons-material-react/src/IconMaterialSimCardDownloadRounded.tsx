import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadRounded'
      short_name='SimCardDownload'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8.825Q4 8.425 4.15 8.062Q4.3 7.7 4.575 7.425L9.425 2.575Q9.7 2.3 10.062 2.15Q10.425 2 10.825 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H10.85L6 8.85V20Q6 20 6 20Q6 20 6 20ZM12 16.575Q12.2 16.575 12.375 16.512Q12.55 16.45 12.7 16.3L15.325 13.675Q15.6 13.4 15.6 13Q15.6 12.6 15.3 12.3Q15.025 12.025 14.613 12.025Q14.2 12.025 13.9 12.3L13 13.15V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10V13.15L10.1 12.275Q9.8 12 9.4 12Q9 12 8.7 12.3Q8.425 12.575 8.425 13Q8.425 13.425 8.7 13.7L11.3 16.3Q11.45 16.45 11.625 16.512Q11.8 16.575 12 16.575ZM6 20Q6 20 6 20Q6 20 6 20H10.85H18Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadRounded.displayName = 'AmauiIconMaterialSimCardDownloadRounded';

export default IconMaterialSimCardDownloadRounded;
