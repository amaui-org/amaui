import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffRoundedW100'
      short_name='FlashOff'

      {...props}
    >
      <path d="M15.35 12.85 13.85 11.35H14.925Q15.35 11.35 15.575 11.725Q15.8 12.1 15.575 12.475ZM13.1 10.6 7.5 5V4.25Q7.5 3.925 7.713 3.712Q7.925 3.5 8.25 3.5H15.1Q15.525 3.5 15.738 3.837Q15.95 4.175 15.775 4.55ZM20.05 21.05 14.1 15.1 10.9 20.625Q10.75 20.9 10.45 20.812Q10.15 20.725 10.15 20.425V14H8.25Q7.925 14 7.713 13.787Q7.5 13.575 7.5 13.25V8.5L3.9 4.9Q3.8 4.8 3.788 4.662Q3.775 4.525 3.9 4.4Q4.025 4.275 4.15 4.275Q4.275 4.275 4.4 4.4L20.55 20.55Q20.65 20.65 20.663 20.788Q20.675 20.925 20.55 21.05Q20.425 21.175 20.3 21.175Q20.175 21.175 20.05 21.05Z"/>
    </Icon>
  );
});

IconMaterialFlashOffRoundedW100.displayName = 'AmauiIconMaterialFlashOffRoundedW100';

export default IconMaterialFlashOffRoundedW100;
