import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100Filled'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 15.5q-.3 0-.487-.213-.188-.212-.113-.487.375-1.2 1.963-2.1 1.587-.9 4.287-.9t4.288.9q1.587.9 1.962 2.1.075.275-.112.487-.188.213-.488.213Zm14 6.2v-6.2q0-2-1.562-3.488-1.563-1.487-4.113-1.987L11.55 7.5q0-.35.213-.525.212-.175.562-.175h3.625V3.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8h3.675q.35 0 .575.237.225.238.175.588L19.7 20.95q-.05.425-.3.588-.25.162-.6.162ZM3.225 18.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100Filled.displayName = 'AmauiIconMaterialFastfoodW100Filled';

export default IconMaterialFastfoodW100Filled;
