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
      <path d="M7 22q-.8 0-1.362-.5Q5.075 21 5 20.25L3.125 3.1q-.05-.45.25-.775T4.125 2h15.75q.45 0 .75.325t.25.775L19 20.25q-.075.75-.637 1.25Q17.8 22 17 22ZM5.9 10 7 20h10l1.1-10Zm-.25-2h12.7l.4-4H5.25ZM12 19q1.2 0 2.1-.825.9-.825.9-2.025 0-.875-.525-1.838-.525-.962-1.6-2.287-.35-.425-.875-.425t-.875.425q-1.075 1.325-1.6 2.287Q9 15.275 9 16.15q0 1.2.9 2.025T12 19Zm6.1-9H5.9h12.2ZM12 17q-.425 0-.712-.288Q11 16.425 11 16q0-.275.275-.85T12 13.9q.45.7.725 1.262.275.563.275.838 0 .425-.287.712Q12.425 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLocalDrink.displayName = 'AmauiIconMaterialLocalDrink';

export default IconMaterialLocalDrink;
