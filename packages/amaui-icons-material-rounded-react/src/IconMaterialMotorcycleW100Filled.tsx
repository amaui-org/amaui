import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotorcycleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleW100Filled'

      short_name='Motorcycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 17.7q-1.55 0-2.625-1.075T1.8 14q0-1.55 1.075-2.625T5.5 10.3h11.9L14.1 7h-2.25q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.25q.15 0 .275.05.125.05.25.175L18.4 10.3q1.575-.05 2.688 1.037Q22.2 12.425 22.2 14q0 1.55-1.075 2.625T18.5 17.7q-1.55 0-2.625-1.075T14.8 14q0-.875.438-1.65.437-.775 1.112-1.35h-2.2l-2.9 2.9q-.2.2-.487.325-.288.125-.588.125H9.15q-.1 1.425-1.15 2.388-1.05.962-2.5.962Zm13-.7q1.25 0 2.125-.875T21.5 14q0-1.25-.875-2.125T18.5 11q-1.25 0-2.125.875T15.5 14q0 1.25.875 2.125T18.5 17Zm-13 0q1.15 0 2-.762.85-.763 1-1.888H5.85q-.15 0-.25-.1T5.5 14q0-.15.1-.25t.25-.1H8.5q-.15-1.125-1-1.888Q6.65 11 5.5 11q-1.25 0-2.125.875T2.5 14q0 1.25.875 2.125T5.5 17Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleW100Filled.displayName = 'AmauiIconMaterialMotorcycleW100Filled';

export default IconMaterialMotorcycleW100Filled;
