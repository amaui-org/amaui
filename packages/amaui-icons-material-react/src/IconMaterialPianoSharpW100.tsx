import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoSharpW100'
      short_name='Piano'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM5 19H8.775V14.1H7.525V5H5ZM15.225 19H19V5H16.475V14.1H15.225ZM9.475 19H14.525V14.1H13.275V5H10.725V14.1H9.475Z"/>
    </Icon>
  );
});

IconMaterialPianoSharpW100.displayName = 'AmauiIconMaterialPianoSharpW100';

export default IconMaterialPianoSharpW100;
