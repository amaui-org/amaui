import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarSharpFilled'
      short_name='TableBar'

      {...props}
    >
      <path d="M6 20 8 15H11V10.975Q7.175 10.85 4.588 9.85Q2 8.85 2 7.5Q2 6.05 4.925 5.025Q7.85 4 12 4Q16.175 4 19.087 5.025Q22 6.05 22 7.5Q22 8.85 19.413 9.85Q16.825 10.85 13 10.975V15H16L18 20H16L14.8 17H9.2L8 20Z"/>
    </Icon>
  );
});

IconMaterialTableBarSharpFilled.displayName = 'AmauiIconMaterialTableBarSharpFilled';

export default IconMaterialTableBarSharpFilled;
