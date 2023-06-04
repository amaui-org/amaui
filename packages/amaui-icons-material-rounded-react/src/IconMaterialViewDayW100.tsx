import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 18.4q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0-12.1q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1ZM5.8 14.7q-.625 0-1.062-.438Q4.3 13.825 4.3 13.2v-2.4q0-.625.438-1.063Q5.175 9.3 5.8 9.3h12.4q.625 0 1.063.437.437.438.437 1.063v2.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.35 0 .575-.225Q19 13.55 19 13.2v-2.4q0-.35-.225-.575Q18.55 10 18.2 10H5.8q-.35 0-.575.225Q5 10.45 5 10.8v2.4q0 .35.225.575Q5.45 14 5.8 14ZM5 10h.8q-.35 0-.575.225Q5 10.45 5 10.8v2.4q0 .35.225.575Q5.45 14 5.8 14H5V10Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100.displayName = 'AmauiIconMaterialViewDayW100';

export default IconMaterialViewDayW100;
