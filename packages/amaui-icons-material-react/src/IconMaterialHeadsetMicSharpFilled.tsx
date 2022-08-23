import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadsetMicSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicSharpFilled'
      short_name='HeadsetMic'

      {...props}
    >
      <path d="M12 23V21H19V20H15V12H19V11Q19 8.1 16.95 6.05Q14.9 4 12 4Q9.1 4 7.05 6.05Q5 8.1 5 11V12H9V20H3V11Q3 9.15 3.712 7.512Q4.425 5.875 5.65 4.65Q6.875 3.425 8.512 2.712Q10.15 2 12 2Q13.85 2 15.488 2.712Q17.125 3.425 18.35 4.65Q19.575 5.875 20.288 7.512Q21 9.15 21 11V23Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicSharpFilled.displayName = 'AmauiIconMaterialHeadsetMicSharpFilled';

export default IconMaterialHeadsetMicSharpFilled;
