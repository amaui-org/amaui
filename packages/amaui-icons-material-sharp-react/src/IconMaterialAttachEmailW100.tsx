import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachEmailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100'

      short_name='AttachEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.125 16.7V3.3h17.4v6.2h-.7V4.55l-8 5.3-8-5.3V16h10.95v.7Zm8.7-7.7 7.6-5h-15.2Zm8 11.65q-1.275 0-2.162-.888-.888-.887-.888-2.162v-4.5q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v4.5h-.7v-4.5q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713v4.5q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662v-4h.7v4q0 1.275-.887 2.162-.888.888-2.163.888ZM2.825 4v12-5.5Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100.displayName = 'AmauiIconMaterialAttachEmailW100';

export default IconMaterialAttachEmailW100;
