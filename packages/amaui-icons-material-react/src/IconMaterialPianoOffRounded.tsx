import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffRounded'
      short_name='PianoOff'

      {...props}
    >
      <path d="M19.075 21.9 18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L2.075 4.925Q1.775 4.625 1.775 4.225Q1.775 3.825 2.075 3.525Q2.375 3.225 2.788 3.225Q3.2 3.225 3.5 3.525L20.5 20.5Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9ZM21 18.15 19 16.15V5Q19 5 19 5Q19 5 19 5H17V13.5Q17 13.625 16.962 13.75Q16.925 13.875 16.85 14L13 10.15V5H11V8.15L5.85 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM5 19H8.25V14.5H8Q7.575 14.5 7.287 14.212Q7 13.925 7 13.5V9.85L5 7.85V19Q5 19 5 19Q5 19 5 19ZM9.75 19H14.25V17.1L10.95 13.8Q10.85 14.1 10.6 14.3Q10.35 14.5 10 14.5H9.75ZM15.75 19H16.15L15.75 18.6Z"/>
    </Icon>
  );
});

IconMaterialPianoOffRounded.displayName = 'AmauiIconMaterialPianoOffRounded';

export default IconMaterialPianoOffRounded;
