import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLivingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingFilled'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm3-4h10q.825 0 1.413-.587Q19 16.825 19 16v-3.5q0-.675-.337-1.238-.338-.562-.913-.912V9q0-1.25-.875-2.125T14.75 6h-5.5Q8 6 7.125 6.875T6.25 9v1.35q-.575.35-.912.912Q5 11.825 5 12.5V16q0 .825.588 1.413Q6.175 18 7 18Zm0-1.5q-.225 0-.362-.137Q6.5 16.225 6.5 16v-3.5q0-.425.287-.713.288-.287.713-.287t.713.287q.287.288.287.713v2h7v-2q0-.425.287-.713.288-.287.713-.287t.712.287q.288.288.288.713V16q0 .225-.137.363-.138.137-.363.137Zm3-3.5v-.5q0-.975-.65-1.675-.65-.7-1.6-.775V9q0-.65.425-1.075Q8.6 7.5 9.25 7.5h5.5q.65 0 1.075.425.425.425.425 1.075v1.05q-.95.075-1.6.775-.65.7-.65 1.675v.5Z"/>
    </Icon>
  );
});

IconMaterialLivingFilled.displayName = 'AmauiIconMaterialLivingFilled';

export default IconMaterialLivingFilled;
