import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingFilled'

      short_name='Moving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.875-.875 2.125-.875t2.125.875l1.15 1.15q.3.3.713.3.412 0 .712-.3L18.575 8H17q-.425 0-.712-.287Q16 7.425 16 7t.288-.713Q16.575 6 17 6h4q.425 0 .712.287Q22 6.575 22 7v4q0 .425-.288.712Q21.425 12 21 12t-.712-.288Q20 11.425 20 11V9.425l-4.475 4.45q-.875.875-2.125.875t-2.125-.875L10.1 12.7q-.275-.275-.7-.275-.425 0-.7.275l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialMovingFilled.displayName = 'AmauiIconMaterialMovingFilled';

export default IconMaterialMovingFilled;
