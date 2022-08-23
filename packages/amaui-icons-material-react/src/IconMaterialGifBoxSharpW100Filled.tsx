import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifBoxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxSharpW100Filled'
      short_name='GifBox'

      {...props}
    >
      <path d="M7.65 13.85H10.35V12.15H9.65V13.15H8.35V10.85H10.325V10.15H7.65ZM11.65 13.85H12.35V10.15H11.65ZM13.65 13.85H14.35V12.35H15.85V11.65H14.35V10.85H16.35V10.15H13.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialGifBoxSharpW100Filled.displayName = 'AmauiIconMaterialGifBoxSharpW100Filled';

export default IconMaterialGifBoxSharpW100Filled;
