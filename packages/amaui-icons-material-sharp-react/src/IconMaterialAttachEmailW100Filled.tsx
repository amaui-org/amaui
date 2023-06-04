import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100Filled'

      short_name='AttachEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.825 20.65q-1.275 0-2.162-.888-.888-.887-.888-2.162v-4.5q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v4.5h-.7v-4.5q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713v4.5q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662v-4h.7v4q0 1.275-.887 2.162-.888.888-2.163.888Zm-8-10.8 8-5.3-.4-.55-7.6 5-7.6-5-.4.55Zm-8.7 6.85V3.3h17.4v7.2h-2.05q-1.1 0-1.9.75-.8.75-.8 1.85v3.6Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100Filled.displayName = 'AmauiIconMaterialAttachEmailW100Filled';

export default IconMaterialAttachEmailW100Filled;
