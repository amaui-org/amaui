import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCountertopsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsW100'

      short_name='Countertops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 17.3q-.325 0-.538-.213-.212-.212-.212-.537v-5H5.45q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.4q-.475 0-.813-.338Q6.7 10.175 6.7 9.7V7.45q0-.325.212-.538.213-.212.538-.212h2.4q.325 0 .538.212.212.213.212.538V9.7q0 .475-.337.812-.338.338-.813.338H15v-2.2q0-.525-.363-.888-.362-.362-.887-.362-.35 0-.625.175t-.45.45q-.05.075-.137.125-.088.05-.163.05-.225 0-.325-.15t0-.35q.25-.45.7-.725.45-.275 1-.275.825 0 1.388.562.562.563.562 1.388v2.2h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.3v5q0 .325-.213.537-.212.213-.537.213Zm-.05-7.15h2.5V7.4H7.4Zm0 6.45h4.25v-5.05H7.4Zm4.95 0h4.25v-5.05h-4.25ZM7.4 10.15h2.5Zm4.6 3.925Z"/>
    </Icon>
  );
});

IconMaterialCountertopsW100.displayName = 'AmauiIconMaterialCountertopsW100';

export default IconMaterialCountertopsW100;
