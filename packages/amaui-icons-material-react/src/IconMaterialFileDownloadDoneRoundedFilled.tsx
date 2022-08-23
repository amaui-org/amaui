import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadDoneRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneRoundedFilled'
      short_name='FileDownloadDone'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19Q5 18.575 5.287 18.288Q5.575 18 6 18H18Q18.425 18 18.712 18.288Q19 18.575 19 19Q19 19.425 18.712 19.712Q18.425 20 18 20ZM9.55 15.575Q9.35 15.575 9.175 15.512Q9 15.45 8.85 15.3L4.6 11.05Q4.325 10.775 4.325 10.325Q4.325 9.875 4.6 9.6Q4.875 9.325 5.3 9.325Q5.725 9.325 6 9.6L9.55 13.15L18 4.7Q18.275 4.425 18.713 4.425Q19.15 4.425 19.425 4.7Q19.7 4.975 19.7 5.412Q19.7 5.85 19.425 6.125L10.25 15.3Q10.1 15.45 9.925 15.512Q9.75 15.575 9.55 15.575Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneRoundedFilled.displayName = 'AmauiIconMaterialFileDownloadDoneRoundedFilled';

export default IconMaterialFileDownloadDoneRoundedFilled;
