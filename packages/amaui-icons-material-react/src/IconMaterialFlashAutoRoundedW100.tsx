import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashAutoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoRoundedW100'
      short_name='FlashAuto'

      {...props}
    >
      <path d="M14.05 11Q13.85 11 13.75 10.863Q13.65 10.725 13.725 10.525L16.725 2.925Q16.775 2.775 16.938 2.662Q17.1 2.55 17.275 2.55Q17.45 2.55 17.613 2.662Q17.775 2.775 17.825 2.925L20.85 10.5Q20.925 10.7 20.825 10.85Q20.725 11 20.5 11Q20.4 11 20.3 10.938Q20.2 10.875 20.15 10.775L19.15 8.3H15.4L14.4 10.775Q14.35 10.875 14.25 10.938Q14.15 11 14.05 11ZM15.65 7.65H18.9L17.3 3.55H17.2ZM6.9 20.6Q6.75 20.875 6.45 20.788Q6.15 20.7 6.15 20.4V14H4.25Q3.925 14 3.713 13.787Q3.5 13.575 3.5 13.25V4.25Q3.5 3.925 3.713 3.712Q3.925 3.5 4.25 3.5H11.1Q11.525 3.5 11.738 3.837Q11.95 4.175 11.775 4.55L8.75 11.35H10.95Q11.375 11.35 11.6 11.725Q11.825 12.1 11.6 12.475Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoRoundedW100.displayName = 'AmauiIconMaterialFlashAutoRoundedW100';

export default IconMaterialFlashAutoRoundedW100;
