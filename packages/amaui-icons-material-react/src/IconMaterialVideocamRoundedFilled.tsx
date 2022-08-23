import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamRoundedFilled'
      short_name='Videocam'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.375 7.125 21.688 7.237Q22 7.35 22 7.7V16.3Q22 16.65 21.688 16.762Q21.375 16.875 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialVideocamRoundedFilled.displayName = 'AmauiIconMaterialVideocamRoundedFilled';

export default IconMaterialVideocamRoundedFilled;
