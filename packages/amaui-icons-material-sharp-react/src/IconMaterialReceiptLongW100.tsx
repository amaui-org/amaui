import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptLongW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongW100'

      short_name='ReceiptLong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20.7q-.725 0-1.213-.488Q4.3 19.725 4.3 19v-1.7h3V3.8l1.2.7 1.25-.7 1.25.7 1.25-.7 1.25.7 1.25-.7 1.25.7 1.25-.7 1.25.7 1.2-.7V19q0 .725-.487 1.212-.488.488-1.213.488Zm12-.7q.425 0 .712-.288Q19 19.425 19 19V5H8v12.3h9V19q0 .425.288.712.287.288.712.288ZM9.5 8.35v-.7h5.15v.7Zm0 3v-.7h5.15v.7Zm7.35-2.65q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.487.212q.213.213.213.488t-.213.487q-.212.213-.487.213Zm0 3q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.487.212q.213.213.213.488t-.213.487q-.212.213-.487.213ZM6 20h10.3v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongW100.displayName = 'AmauiIconMaterialReceiptLongW100';

export default IconMaterialReceiptLongW100;
