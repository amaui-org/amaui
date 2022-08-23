import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffSharpFilled'
      short_name='FileDownloadOff'

      {...props}
    >
      <path d="M19.775 22.625 17.15 20Q17.15 20 17.15 20Q17.15 20 17.15 20H6Q5.175 20 4.588 19.413Q4 18.825 4 18V15H6V18Q6 18 6 18Q6 18 6 18H15.15L12.575 15.425L12 16L7 11L7.575 10.425L1.375 4.225L2.8 2.8L21.2 21.2ZM20 17.15 18 15.15V15H20ZM15.425 12.575 14 11.15 15.6 9.55 17 11ZM13 10.15 11 8.15V4H13Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffSharpFilled.displayName = 'AmauiIconMaterialFileDownloadOffSharpFilled';

export default IconMaterialFileDownloadOffSharpFilled;
