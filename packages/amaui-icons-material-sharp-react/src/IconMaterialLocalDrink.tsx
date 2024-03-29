import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDrink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrink'

      short_name='LocalDrink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 22 3 2h18l-2.2 20ZM7 20h10l1.1-10H5.9ZM5.65 8h12.7l.4-4H5.25ZM12 19q1.2 0 2.1-.825.9-.825.9-2.025 0-1.025-.738-2.225Q13.525 12.725 12 11q-1.525 1.725-2.262 2.925Q9 15.125 9 16.15q0 1.2.9 2.025T12 19Zm0-2q-.425 0-.712-.288Q11 16.425 11 16q0-.275.275-.85T12 13.9q.45.7.725 1.262.275.563.275.838 0 .425-.287.712Q12.425 17 12 17Zm-6.1-7h12.2Z"/>
    </Icon>
  );
});

IconMaterialLocalDrink.displayName = 'AmauiIconMaterialLocalDrink';

export default IconMaterialLocalDrink;
