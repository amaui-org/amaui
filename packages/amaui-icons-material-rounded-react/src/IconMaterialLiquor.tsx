import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiquor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Liquor'

      short_name='Liquor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.425 0-.712-.288Q3 21.425 3 21t.288-.712Q3.575 20 4 20h1v-3.2q-.875-.3-1.438-1.062Q3 14.975 3 14V7q0-.425.288-.713Q3.575 6 4 6h4q.425 0 .713.287Q9 6.575 9 7v7q0 .975-.562 1.738Q7.875 16.5 7 16.8V20h1q.425 0 .713.288Q9 20.575 9 21t-.287.712Q8.425 22 8 22Zm1-11h2V8H5Zm1 4q.425 0 .713-.288Q7 14.425 7 14v-1H5v1q0 .425.287.712Q5.575 15 6 15Zm7 7q-.825 0-1.412-.587Q11 20.825 11 20v-9.55q0-.65.375-1.163.375-.512.975-.737l.95-.35q.35-.125.525-.363Q14 7.6 14 7.25V3q0-.425.288-.713Q14.575 2 15 2h3q.425 0 .712.287Q19 2.575 19 3v4.25q0 .35.175.587.175.238.525.363l.95.35q.6.225.975.737Q22 9.8 22 10.45V20q0 .825-.587 1.413Q20.825 22 20 22Zm3-17h1V4h-1Zm-3 7h7v-1.55l-.95-.35q-.95-.35-1.5-1.1Q17 8.25 17 7.3V7h-1v.3q0 .95-.55 1.7t-1.5 1.1l-.95.35Zm0 8h7v-2h-7Zm0-4h7v-2h-7Zm-7-1Zm7 1v-2 2Z"/>
    </Icon>
  );
});

IconMaterialLiquor.displayName = 'AmauiIconMaterialLiquor';

export default IconMaterialLiquor;
