import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGasMeterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeterW100'

      short_name='GasMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.7q-1.125 0-1.912-.787Q5.3 19.125 5.3 18V8q0-1.125.788-1.912Q6.875 5.3 8 5.3h1.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h3.3V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3H16q1.125 0 1.913.788.787.787.787 1.912v10q0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7h8q.825 0 1.413-.587Q18 18.825 18 18V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8v10q0 .825.588 1.413Q7.175 20 8 20ZM9 9.35h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3 7.775q.75 0 1.275-.525.525-.525.525-1.25 0-.475-.2-.8-.2-.325-.85-1.05l-.475-.55q-.125-.125-.275-.125-.15 0-.275.125l-.475.55q-.65.725-.85 1.05-.2.325-.2.8 0 .725.525 1.25t1.275.525ZM6 6v14V6Z"/>
    </Icon>
  );
});

IconMaterialGasMeterW100.displayName = 'AmauiIconMaterialGasMeterW100';

export default IconMaterialGasMeterW100;
