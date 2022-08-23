import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellSharp'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.5Q12.425 17.5 12.713 17.212Q13 16.925 13 16.5H11Q11 16.925 11.288 17.212Q11.575 17.5 12 17.5ZM8 16H16V15H15V12.65Q15 11.55 14.4 10.65Q13.8 9.75 12.75 9.5V8.5H11.25V9.5Q10.2 9.75 9.6 10.65Q9 11.55 9 12.65V15H8ZM4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  );
});

IconMaterialDoorbellSharp.displayName = 'AmauiIconMaterialDoorbellSharp';

export default IconMaterialDoorbellSharp;
