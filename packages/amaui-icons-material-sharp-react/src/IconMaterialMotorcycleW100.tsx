import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotorcycleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleW100'

      short_name='Motorcycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 11H7.65h5.5Zm-5 6.7q-1.55 0-2.625-1.075T1.8 14q0-1.55 1.075-2.625T5.5 10.3h11.9L14.1 7h-2.6v-.7h2.9l4 4q1.575-.05 2.688 1.037Q22.2 12.425 22.2 14q0 1.55-1.075 2.625T18.5 17.7q-1.55 0-2.625-1.075T14.8 14q0-.875.438-1.65.437-.775 1.112-1.35h-2.2l-3.35 3.35H9.15q-.1 1.425-1.15 2.388-1.05.962-2.5.962Zm13-.7q1.25 0 2.125-.875T21.5 14q0-1.25-.875-2.125T18.5 11q-1.25 0-2.125.875T15.5 14q0 1.25.875 2.125T18.5 17Zm-13 0q1.15 0 2-.762.85-.763 1-1.888h-3v-.7h3q-.15-1.125-1-1.888Q6.65 11 5.5 11q-1.25 0-2.125.875T2.5 14q0 1.25.875 2.125T5.5 17Zm3.7-3.35h1.3L13.15 11h-5.5q.675.45 1.088 1.15.412.7.462 1.5Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleW100.displayName = 'AmauiIconMaterialMotorcycleW100';

export default IconMaterialMotorcycleW100;
