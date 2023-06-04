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
      <path d="M18.825 20.65q-1.275 0-2.162-.888-.888-.887-.888-2.162v-4.5q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V13.1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713v4.5q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662v-3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65q0 1.275-.887 2.162-.888.888-2.163.888Zm-15.2-3.95q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075.425-.425 1.075-.425h14.4q.65 0 1.075.425.425.425.425 1.075v5.7h-2.05q-1.1 0-1.9.75-.8.75-.8 1.85v3.6Zm7.2-7q.125 0 .225-.038.1-.037.2-.087l7.275-4.825q.125-.075.15-.225.025-.15-.05-.25-.075-.1-.212-.125-.138-.025-.263.025L10.825 9 3.5 4.175q-.1-.05-.25-.05t-.225.125q-.075.125-.05.275.025.15.15.225L10.4 9.575q.1.05.2.087.1.038.225.038Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100Filled.displayName = 'AmauiIconMaterialAttachEmailW100Filled';

export default IconMaterialAttachEmailW100Filled;
