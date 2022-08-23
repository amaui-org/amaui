import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleanHandsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsSharp'
      short_name='CleanHands'

      {...props}
    >
      <path d="M17 9 16.35 7.625 15 7 16.35 6.375 17 5 17.625 6.375 19 7 17.625 7.625ZM20 14Q19.175 14 18.587 13.412Q18 12.825 18 12Q18 11.425 18.413 10.537Q18.825 9.65 20 8Q21.175 9.65 21.587 10.537Q22 11.425 22 12Q22 12.825 21.413 13.412Q20.825 14 20 14ZM15 11.65 13 10.9Q12.95 9.7 12.088 8.85Q11.225 8 10 8Q9.175 8 8.488 8.412Q7.8 8.825 7.4 9.5H5.25Q5.675 8.225 6.663 7.3Q7.65 6.375 9 6.1V4H7.5V2H13Q13.85 2 14.6 2.275Q15.35 2.55 15.975 3.025L14.55 4.45Q14.2 4.25 13.812 4.125Q13.425 4 13 4H11V6.1Q12.725 6.45 13.863 7.812Q15 9.175 15 11ZM14 22.5 7 20.55V22H1V11H8.95L17 14V16H22V20ZM3 20H5V13H3ZM13.95 20.4 19.9 18.55V18H12.825L9.7 16.95L10.3 15.05L13.225 16H15V15.35L8.6 13H7V18.5ZM9.225 9.5Q9.225 9.5 9.225 9.5Q9.225 9.5 9.225 9.5Q9.225 9.5 9.225 9.5Q9.225 9.5 9.225 9.5Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsSharp.displayName = 'AmauiIconMaterialCleanHandsSharp';

export default IconMaterialCleanHandsSharp;
