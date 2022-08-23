import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadsetOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffSharpW100Filled'
      short_name='HeadsetOff'

      {...props}
    >
      <path d="M19.8 17.05 16.3 13.575V13.1H19.1V11Q19.1 8.1 17.05 6.05Q15 4 12.1 4Q11 4 9.938 4.35Q8.875 4.7 8.05 5.3L7.55 4.8Q8.3 4.2 9.5 3.75Q10.7 3.3 12.1 3.3Q13.7 3.3 15.1 3.9Q16.5 4.5 17.55 5.55Q18.6 6.6 19.2 8Q19.8 9.4 19.8 11ZM21.4 22.5 19.8 20.9H12.1V20.2H19.1L17.6 18.7H16.3V17.4L6.15 7.25Q5.7 8 5.4 9.012Q5.1 10.025 5.1 11V13.1H7.9V18.7H4.4V11Q4.4 9.8 4.738 8.725Q5.075 7.65 5.65 6.75L1.6 2.7L2.1 2.2L21.9 22Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffSharpW100Filled.displayName = 'AmauiIconMaterialHeadsetOffSharpW100Filled';

export default IconMaterialHeadsetOffSharpW100Filled;
