import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleanHandsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsSharpFilled'
      short_name='CleanHands'

      {...props}
    >
      <path d="M17 9 16.35 7.625 15 7 16.35 6.375 17 5 17.625 6.375 19 7 17.625 7.625ZM20 14Q19.175 14 18.587 13.412Q18 12.825 18 12Q18 11.425 18.413 10.537Q18.825 9.65 20 8Q21.175 9.65 21.587 10.537Q22 11.425 22 12Q22 12.825 21.413 13.412Q20.825 14 20 14ZM1 22V11H5V22ZM14 22 7 20.025V11H8.975L17 14V16H13L11.25 15.325L10.9 16.25L13 17H22V19ZM15 11.65 9.225 9.5H5.25Q5.675 8.225 6.663 7.3Q7.65 6.375 9 6.1V4H7.5V2H13Q13.85 2 14.6 2.275Q15.35 2.55 15.975 3.025L14.55 4.45Q14.2 4.25 13.812 4.125Q13.425 4 13 4H11V6.1Q12.725 6.45 13.863 7.812Q15 9.175 15 11Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsSharpFilled.displayName = 'AmauiIconMaterialCleanHandsSharpFilled';

export default IconMaterialCleanHandsSharpFilled;
