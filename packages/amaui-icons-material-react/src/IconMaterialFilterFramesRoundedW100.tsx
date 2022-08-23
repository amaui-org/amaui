import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesRoundedW100'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M4.15 21.25Q3.5 21.25 3.075 20.825Q2.65 20.4 2.65 19.75V6.05Q2.65 5.4 3.075 4.975Q3.5 4.55 4.15 4.55H8.8L11.475 1.875Q11.7 1.65 12 1.65Q12.3 1.65 12.525 1.875L15.2 4.55H19.85Q20.5 4.55 20.925 4.975Q21.35 5.4 21.35 6.05V19.75Q21.35 20.4 20.925 20.825Q20.5 21.25 19.85 21.25ZM4.15 20.55H19.85Q20.2 20.55 20.425 20.325Q20.65 20.1 20.65 19.75V6.05Q20.65 5.7 20.425 5.475Q20.2 5.25 19.85 5.25H4.15Q3.8 5.25 3.575 5.475Q3.35 5.7 3.35 6.05V19.75Q3.35 20.1 3.575 20.325Q3.8 20.55 4.15 20.55ZM7.4 17.25Q7.075 17.25 6.863 17.038Q6.65 16.825 6.65 16.5V9.3Q6.65 8.975 6.863 8.762Q7.075 8.55 7.4 8.55H16.6Q16.925 8.55 17.138 8.762Q17.35 8.975 17.35 9.3V16.5Q17.35 16.825 17.138 17.038Q16.925 17.25 16.6 17.25ZM7.35 16.55V9.25V16.55ZM7.35 16.55H16.65V9.25H7.35Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesRoundedW100.displayName = 'AmauiIconMaterialFilterFramesRoundedW100';

export default IconMaterialFilterFramesRoundedW100;
