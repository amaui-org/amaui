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
      <path d="M3.625 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075.425-.425 1.075-.425h14.4q.65 0 1.075.425.425.425.425 1.075v4.7h-.7V4.55L11.25 9.575q-.1.05-.2.087-.1.038-.225.038t-.225-.038q-.1-.037-.2-.087L2.825 4.55V15.2q0 .35.225.575.225.225.575.225h10.15v.7Zm7.2-7.7 7.6-5h-15.2Zm8 11.65q-1.275 0-2.162-.888-.888-.887-.888-2.162v-4.5q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V13.1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713v4.5q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662v-3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65q0 1.275-.887 2.162-.888.888-2.163.888Zm-16-16.1v.2-.6.025V4v.175-.05.625-.2V16v-5.5Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100.displayName = 'AmauiIconMaterialAttachEmailW100';

export default IconMaterialAttachEmailW100;
