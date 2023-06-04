import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMuseumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumW100'

      short_name='Museum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V9.7h-.575q-.175 0-.3-.125t-.125-.3q0-.125.062-.238.063-.112.163-.187L11.15 4.2q.2-.125.412-.2.213-.075.438-.075t.438.075q.212.075.412.2l6.625 4.65q.1.075.163.187.062.113.062.238 0 .175-.125.3t-.3.125H18.7V20h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6 20h12Zm3.15-2.65q.15 0 .25-.1t.1-.25v-4.3l1.875 2.775q.125.175.288.25.162.075.337.075.2 0 .35-.075.15-.075.275-.25L14.5 12.7V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.85q0-.2-.15-.35-.15-.15-.35-.15-.15 0-.312.087-.163.088-.238.213L12 15.15l-2.15-3.2q-.075-.125-.237-.213-.163-.087-.313-.087-.2 0-.35.15-.15.15-.15.35V17q0 .15.1.25t.25.1ZM18 20V8.65l-6-4.2-6 4.2V20Z"/>
    </Icon>
  );
});

IconMaterialMuseumW100.displayName = 'AmauiIconMaterialMuseumW100';

export default IconMaterialMuseumW100;
