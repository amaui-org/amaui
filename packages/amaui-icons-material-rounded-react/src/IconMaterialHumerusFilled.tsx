import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumerusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusFilled'

      short_name='Humerus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 22q-1.275 0-2.162-.875Q6 20.25 6 18.975q0-.6.238-1.15.237-.55.662-.975l2.125-2.075V11q-.025-.35-.3-.575Q8.45 10.2 8.15 10q-1.125-.85-1.637-1.75Q6 7.35 6 6.25q0-1.775 1.312-3.013Q8.625 2 10.5 2q.425 0 .812.112.388.113.688.263.325.125.538.25.212.125.437.125.5 0 1-.35.275-.15.575-.275.3-.125.675-.125 1.2 0 1.987.837.788.838.788 2.038 0 .575-.237 1.162-.238.588-.713 1.063l-2.025 2.075v5.575l2.1 2.1q.425.425.65.975.225.55.225 1.15 0 1.275-.862 2.15Q16.275 22 15 22q-.6 0-1.15-.225-.55-.225-.975-.65-.175-.175-.387-.263-.213-.087-.463-.087t-.463.087q-.212.088-.387.263-.425.425-.975.65Q9.65 22 9.05 22Z"/>
    </Icon>
  );
});

IconMaterialHumerusFilled.displayName = 'AmauiIconMaterialHumerusFilled';

export default IconMaterialHumerusFilled;
