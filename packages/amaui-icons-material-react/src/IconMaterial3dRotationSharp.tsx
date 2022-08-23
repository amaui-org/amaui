import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3dRotationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotationSharp'
      short_name='3dRotation'

      {...props}
    >
      <path d="M9.05 2.45Q9.775 2.2 10.512 2.1Q11.25 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12H20Q20 9.125 18.188 6.925Q16.375 4.725 13.55 4.15L15 5.6L13.6 7ZM14.95 21.55Q14.225 21.8 13.488 21.9Q12.75 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12H4Q4 14.875 5.812 17.075Q7.625 19.275 10.45 19.85L9 18.4L10.4 17ZM12.5 15V9H15.5Q15.925 9 16.212 9.287Q16.5 9.575 16.5 10V14Q16.5 14.425 16.212 14.712Q15.925 15 15.5 15ZM14 13.5H15Q15 13.5 15 13.5Q15 13.5 15 13.5V10.5Q15 10.5 15 10.5Q15 10.5 15 10.5H14ZM7.5 15V13.5H10V12.5H8.5V11.5H10V10.5H7.5V9H11.5V15Z"/>
    </Icon>
  );
});

IconMaterial3dRotationSharp.displayName = 'AmauiIconMaterial3dRotationSharp';

export default IconMaterial3dRotationSharp;
