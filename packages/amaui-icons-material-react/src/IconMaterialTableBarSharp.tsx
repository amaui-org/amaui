import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarSharp'
      short_name='TableBar'

      {...props}
    >
      <path d="M6 20 8 15H11V10.975Q7.175 10.85 4.588 9.85Q2 8.85 2 7.5Q2 6.05 4.925 5.025Q7.85 4 12 4Q16.175 4 19.087 5.025Q22 6.05 22 7.5Q22 8.85 19.413 9.85Q16.825 10.85 13 10.975V15H16L18 20H16L14.8 17H9.2L8 20ZM12 9Q14.425 9 16.575 8.575Q18.725 8.15 19.725 7.5Q18.725 6.85 16.575 6.425Q14.425 6 12 6Q9.575 6 7.425 6.425Q5.275 6.85 4.275 7.5Q5.275 8.15 7.425 8.575Q9.575 9 12 9ZM12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Z"/>
    </Icon>
  );
});

IconMaterialTableBarSharp.displayName = 'AmauiIconMaterialTableBarSharp';

export default IconMaterialTableBarSharp;
