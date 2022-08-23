import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoSharp'
      short_name='Piano'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H8.25V14.5H7V5H5ZM15.75 19H19V5H17V14.5H15.75ZM9.75 19H14.25V14.5H13V5H11V14.5H9.75Z"/>
    </Icon>
  );
});

IconMaterialPianoSharp.displayName = 'AmauiIconMaterialPianoSharp';

export default IconMaterialPianoSharp;
