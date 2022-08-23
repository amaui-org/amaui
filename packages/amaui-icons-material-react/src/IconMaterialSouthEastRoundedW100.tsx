import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastRoundedW100'
      short_name='SouthEast'

      {...props}
    >
      <path d="M10 18.35Q9.85 18.35 9.75 18.25Q9.65 18.15 9.65 18Q9.65 17.85 9.75 17.75Q9.85 17.65 10 17.65H17.15L5.15 5.65Q5.025 5.525 5.025 5.4Q5.025 5.275 5.15 5.15Q5.275 5.025 5.4 5.025Q5.525 5.025 5.65 5.15L17.65 17.15V10Q17.65 9.85 17.75 9.75Q17.85 9.65 18 9.65Q18.15 9.65 18.25 9.75Q18.35 9.85 18.35 10V17.6Q18.35 17.925 18.138 18.138Q17.925 18.35 17.6 18.35Z"/>
    </Icon>
  );
});

IconMaterialSouthEastRoundedW100.displayName = 'AmauiIconMaterialSouthEastRoundedW100';

export default IconMaterialSouthEastRoundedW100;
