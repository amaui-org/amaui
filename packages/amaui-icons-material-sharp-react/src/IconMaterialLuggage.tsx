import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Luggage'

      short_name='Luggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V6h4V2h6v4h4v15h-2q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21Zm5.5-15h3V3.5h-3ZM7 19h10V8H7Zm1-1h1.5V9H8Zm3.25 0h1.5V9h-1.5Zm3.25 0H16V9h-1.5ZM7 19V8Z"/>
    </Icon>
  );
});

IconMaterialLuggage.displayName = 'AmauiIconMaterialLuggage';

export default IconMaterialLuggage;
