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
      <path d="M13 21.025q-.575 0-.962-.388-.388-.387-.388-.962v-2q-2.25-.125-3.8-1.763Q6.3 14.275 6.3 12V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063V12q0 2.275-1.55 3.912-1.55 1.638-3.8 1.763v1.85q0 .35.225.575.225.225.575.225h4.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.75-7.375h2.975q.125-.4.2-.813Q17 12.425 17 12v-1.65h-3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3v-3.3h-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4V3.8q0-.35-.225-.575Q16.55 3 16.2 3H7.8q-.35 0-.575.225Q7 3.45 7 3.8v7.85h2.75q.675 0 1.275.3.6.3 1 .85.3.425.763.638.462.212.962.212ZM12 17q1.425 0 2.6-.725t1.825-1.925H13.75q-.675 0-1.275-.3-.6-.3-1-.85-.3-.425-.762-.638-.463-.212-.963-.212H7q.125 1.95 1.562 3.3Q10 17 12 17Zm-.25-3.975Z"/>
    </Icon>
  );
});

IconMaterialFluidW100.displayName = 'AmauiIconMaterialFluidW100';

export default IconMaterialFluidW100;
