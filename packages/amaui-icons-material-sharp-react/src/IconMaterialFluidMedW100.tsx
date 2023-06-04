import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidMedW100'

      short_name='FluidMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 20.1q-.625 0-1.062-.437-.438-.438-.438-1.063v-.925q-1.425-.125-2.387-1.175-.963-1.05-.963-2.5V8.3h7.4V14q0 1.45-.962 2.5-.963 1.05-2.388 1.175v.925q0 .35.225.575.225.225.575.225h2.2v.7Zm.6-6.45H20V9h-6v2.65h.75q.65 0 1.25.3t1.025.85q.3.425.763.638.462.212.962.212ZM17 17q1.15 0 2-.762.85-.763.975-1.888H18.75q-.675 0-1.275-.288-.6-.287-1.025-.837-.3-.425-.75-.65-.45-.225-.95-.225H14V14q0 1.275.863 2.137Q15.725 17 17 17Zm-.55-4.2ZM8.1 20.45l-.7-.525V16.2H6.3q-.625 0-1.062-.438Q4.8 15.325 4.8 14.7V7.5h-.7v-.7h3.3V5H6.15v-.7h3.2V5H8.1v1.8h3.3v.7h-.7v7.2q0 .625-.437 1.062-.438.438-1.063.438H8.1ZM6.3 15.5h2.9q.35 0 .575-.225Q10 15.05 10 14.7v-1.4H7.65v-.7H10v-2.2H7.65v-.7H10V7.5H5.5v7.2q0 .35.225.575.225.225.575.225Z"/>
    </Icon>
  );
});

IconMaterialFluidMedW100.displayName = 'AmauiIconMaterialFluidMedW100';

export default IconMaterialFluidMedW100;
