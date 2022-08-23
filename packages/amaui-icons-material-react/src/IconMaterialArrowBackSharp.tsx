import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackSharp'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M12 20 4 12 12 4 13.425 5.4 7.825 11H20V13H7.825L13.425 18.6Z"/>
    </Icon>
  );
});

IconMaterialArrowBackSharp.displayName = 'AmauiIconMaterialArrowBackSharp';

export default IconMaterialArrowBackSharp;
