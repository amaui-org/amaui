import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWomanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanW100Filled'

      short_name='Woman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 21.35q-.325 0-.537-.212-.213-.213-.213-.538v-5.4H8.6q-.4 0-.625-.325-.225-.325-.075-.7l2.35-5.9q.225-.55.7-.863Q11.425 7.1 12 7.1q.575 0 1.05.312.475.313.7.863l2.35 5.9q.15.375-.075.7-.225.325-.625.325h-1.6v5.4q0 .325-.212.538-.213.212-.538.212ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialWomanW100Filled.displayName = 'AmauiIconMaterialWomanW100Filled';

export default IconMaterialWomanW100Filled;
