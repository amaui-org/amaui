import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 15.5q-.3 0-.487-.213-.188-.212-.113-.487.375-1.2 1.963-2.1 1.587-.9 4.287-.9t4.288.9q1.587.9 1.962 2.1.075.275-.112.487-.188.213-.488.213Zm14 6.2V21H19l1.4-13.5h-8.85q0-.35.213-.525.212-.175.562-.175h3.625V3.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8h3.675q.35 0 .575.237.225.238.175.588L19.7 20.95q-.05.425-.3.588-.25.162-.6.162Zm0-.7H19h-1.4Zm-2.9-6.2q-.375-.925-1.762-1.612-1.388-.688-3.713-.688t-3.712.688q-1.388.687-1.763 1.612Zm-5.475 0Zm-6 3.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100.displayName = 'AmauiIconMaterialFastfoodW100';

export default IconMaterialFastfoodW100;
