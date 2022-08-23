import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWoman2RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2RoundedW100Filled'
      short_name='Woman2'

      {...props}
    >
      <path d="M11.475 21.35q-.325 0-.537-.212-.213-.213-.213-.538v-5.4H8.6q-.4 0-.625-.325-.225-.325-.075-.7l2.35-5.9q.225-.55.7-.863Q11.425 7.1 12 7.1q.575 0 1.05.312.475.313.7.863l2.35 5.9q.15.375-.075.7-.225.325-.625.325h-2.125v5.4q0 .325-.213.538-.212.212-.537.212ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialWoman2RoundedW100Filled.displayName = 'AmauiIconMaterialWoman2RoundedW100Filled';

export default IconMaterialWoman2RoundedW100Filled;
