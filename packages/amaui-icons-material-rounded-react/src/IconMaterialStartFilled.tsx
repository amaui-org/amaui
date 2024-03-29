import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartFilled'

      short_name='Start'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.3 17.3q-.3-.3-.3-.713 0-.412.3-.712L18.175 13H7q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11h11.175L15.3 8.1q-.275-.275-.288-.688Q15 7 15.3 6.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275-.413 0-.713-.275ZM3 18q-.425 0-.712-.288Q2 17.425 2 17V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v10q0 .425-.287.712Q3.425 18 3 18Z"/>
    </Icon>
  );
});

IconMaterialStartFilled.displayName = 'AmauiIconMaterialStartFilled';

export default IconMaterialStartFilled;
