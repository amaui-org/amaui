import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashAutoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoRoundedFilled'
      short_name='FlashAuto'

      {...props}
    >
      <path d="M14.65 11Q14.225 11 14.025 10.712Q13.825 10.425 13.975 10.025L16.725 2.75Q16.85 2.45 17.15 2.225Q17.45 2 17.8 2Q18.125 2 18.438 2.225Q18.75 2.45 18.875 2.75L21.65 10.025Q21.8 10.425 21.6 10.712Q21.4 11 20.975 11Q20.775 11 20.575 10.863Q20.375 10.725 20.3 10.525L19.675 8.7H15.975L15.35 10.525Q15.3 10.725 15.088 10.863Q14.875 11 14.65 11ZM16.425 7.4H19.175L17.85 3.65H17.8ZM6.925 21.4Q6.725 21.75 6.363 21.637Q6 21.525 6 21.15V14H4Q3.575 14 3.288 13.712Q3 13.425 3 13V3Q3 2.575 3.288 2.287Q3.575 2 4 2H11.45Q12 2 12.3 2.45Q12.6 2.9 12.375 3.4L9 11H11.25Q11.825 11 12.125 11.5Q12.425 12 12.125 12.5Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoRoundedFilled.displayName = 'AmauiIconMaterialFlashAutoRoundedFilled';

export default IconMaterialFlashAutoRoundedFilled;
