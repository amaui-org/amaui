import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDrinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkFilled'

      short_name='LocalDrink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 22 3 2h18l-2.2 20Zm.45-14h12.7l.4-4H5.25ZM12 19q1.2 0 2.1-.825.9-.825.9-2.025 0-1.025-.738-2.225Q13.525 12.725 12 11q-1.525 1.725-2.262 2.925Q9 15.125 9 16.15q0 1.2.9 2.025T12 19Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkFilled.displayName = 'AmauiIconMaterialLocalDrinkFilled';

export default IconMaterialLocalDrinkFilled;
