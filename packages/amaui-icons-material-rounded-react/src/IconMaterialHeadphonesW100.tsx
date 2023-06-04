import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100'

      short_name='Headphones'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V12q0-1.6.6-3t1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3v6.2q0 .625-.437 1.062-.438.438-1.063.438h-.5q-.625 0-1.063-.438-.437-.437-.437-1.062v-2.6q0-.625.437-1.063.438-.437 1.063-.437H19V12q0-2.925-2.038-4.963Q14.925 5 12 5T7.038 7.037Q5 9.075 5 12v2.1h1.3q.625 0 1.063.437.437.438.437 1.063v2.6q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h.5q.35 0 .575-.225.225-.225.225-.575v-2.6q0-.35-.225-.575Q6.65 14.8 6.3 14.8H5v3.4q0 .35.225.575Q5.45 19 5.8 19Zm11.9 0h.5q.35 0 .575-.225Q19 18.55 19 18.2v-3.4h-1.3q-.35 0-.575.225-.225.225-.225.575v2.6q0 .35.225.575.225.225.575.225ZM5.8 19H5h2.1H6.3Zm11.9 0H16.9 19 18.2Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100.displayName = 'AmauiIconMaterialHeadphonesW100';

export default IconMaterialHeadphonesW100;
