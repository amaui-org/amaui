import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSearchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchSharp'
      short_name='ImageSearch'

      {...props}
    >
      <path d="M3 21V3H10V5H5V19H19V13.65L21 15.65V21ZM21.55 13.4 18.45 10.3Q17.925 10.65 17.325 10.825Q16.725 11 16.05 11Q14.2 11 12.9 9.688Q11.6 8.375 11.6 6.5Q11.6 4.625 12.913 3.312Q14.225 2 16.1 2Q17.975 2 19.288 3.312Q20.6 4.625 20.6 6.5Q20.6 7.175 20.4 7.8Q20.2 8.425 19.9 8.95L22.95 12ZM16.1 9Q17.15 9 17.875 8.275Q18.6 7.55 18.6 6.5Q18.6 5.45 17.875 4.725Q17.15 4 16.1 4Q15.05 4 14.325 4.725Q13.6 5.45 13.6 6.5Q13.6 7.55 14.325 8.275Q15.05 9 16.1 9ZM6 17 9 13 11.25 16 14.25 12 18 17Z"/>
    </Icon>
  );
});

IconMaterialImageSearchSharp.displayName = 'AmauiIconMaterialImageSearchSharp';

export default IconMaterialImageSearchSharp;
