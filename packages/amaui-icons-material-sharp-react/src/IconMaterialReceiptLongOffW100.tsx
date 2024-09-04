import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptLongOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongOffW100'

      short_name='ReceiptLongOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m852-68-74-74q-7 6-16 8t-14 2H240q-29 0-48.5-19.5T172-200v-68h120v-360L90-830l20-20L872-88l-20 20Zm-612-92h520l-80-80H200v40q0 17 11.5 28.5T240-160Zm548-124-28-28v-448H312l-20-20v-28l48 28 50-28 50 28 50-28 50 28 50-28 50 28 50-28 50 28 48-28v524Zm-468 16h332L320-600v332Zm126-358-28-28h168v28H446Zm120 120-28-28h48v28h-20Zm108 14q-11 0-19.5-8.5T646-520q0-11 8.5-19.5T674-548q11 0 19.5 8.5T702-520q0 11-8.5 19.5T674-492Zm0-120q-11 0-19.5-8.5T646-640q0-11 8.5-19.5T674-668q11 0 19.5 8.5T702-640q0 11-8.5 19.5T674-612ZM200-160v-80 80Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongOffW100.displayName = 'AmauiIconMaterialReceiptLongOffW100';

export default IconMaterialReceiptLongOffW100;
