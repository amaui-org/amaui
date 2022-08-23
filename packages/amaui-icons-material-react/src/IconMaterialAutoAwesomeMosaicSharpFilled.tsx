import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicSharpFilled'
      short_name='AutoAwesomeMosaic'

      {...props}
    >
      <path d="M11 21H3V3H11ZM13 11V3H21V11ZM13 21V13H21V21Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicSharpFilled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicSharpFilled';

export default IconMaterialAutoAwesomeMosaicSharpFilled;
