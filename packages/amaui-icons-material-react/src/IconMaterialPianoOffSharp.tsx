import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffSharp'
      short_name='PianoOff'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21H3V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L1.375 4.225L2.8 2.8L21.2 21.2ZM21 18.15 19 16.15V5H17V14.15L13 10.15V5H11V8.15L5.85 3H21ZM5 19H8.25V14.5H7V9.85L5 7.85ZM9.75 19H14.25V17.1L10.95 13.8V14.5H9.75ZM15.75 19H16.15L15.75 18.6Z"/>
    </Icon>
  );
});

IconMaterialPianoOffSharp.displayName = 'AmauiIconMaterialPianoOffSharp';

export default IconMaterialPianoOffSharp;
