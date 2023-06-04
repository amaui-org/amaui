import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidW100'

      short_name='Fluid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.85 21.025h-6.2v-3.35q-2.25-.125-3.8-1.763Q6.3 14.275 6.3 12V2.3h11.4V12q0 2.275-1.55 3.912-1.55 1.638-3.8 1.763v2.65h5.5Zm-4.1-7.375h2.975q.125-.4.2-.813Q17 12.425 17 12v-1.65h-3.35v-.7H17v-3.3h-4.35v-.7H17V3H7v8.65h2.75q.675 0 1.275.3.6.3 1 .85.3.425.763.638.462.212.962.212ZM12 17q1.425 0 2.6-.725t1.825-1.925H13.75q-.675 0-1.275-.3-.6-.3-1-.85-.3-.425-.762-.638-.463-.212-.963-.212H7q.125 1.95 1.562 3.3Q10 17 12 17Zm-.25-3.975Z"/>
    </Icon>
  );
});

IconMaterialFluidW100.displayName = 'AmauiIconMaterialFluidW100';

export default IconMaterialFluidW100;
