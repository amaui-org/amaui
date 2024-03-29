import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathtubFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathtubFilled'

      short_name='Bathtub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9q-.825 0-1.412-.588Q5 7.825 5 7t.588-1.412Q6.175 5 7 5t1.412.588Q9 6.175 9 7t-.588 1.412Q7.825 9 7 9ZM5 22q-.425 0-.713-.288Q4 21.425 4 21q-.825 0-1.412-.587Q2 19.825 2 19v-5q0-.425.288-.713Q2.575 13 3 13h2v-.75q0-.95.65-1.6.65-.65 1.6-.65.5 0 .925.2.425.2.775.55l1.4 1.55q.2.2.388.375.187.175.412.325H18V4.85q0-.35-.25-.6t-.6-.25q-.15 0-.287.062-.138.063-.263.188L15.35 5.5q.125.425.05.838-.075.412-.3.762l-2.75-2.8q.35-.225.75-.288.4-.062.8.088l1.25-1.25q.4-.4.912-.625Q16.575 2 17.15 2q1.2 0 2.025.825T20 4.85V13h1q.425 0 .712.287.288.288.288.713v5q0 .825-.587 1.413Q20.825 21 20 21q0 .425-.288.712Q19.425 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialBathtubFilled.displayName = 'AmauiIconMaterialBathtubFilled';

export default IconMaterialBathtubFilled;
