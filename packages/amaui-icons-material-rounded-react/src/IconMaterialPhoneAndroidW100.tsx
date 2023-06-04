import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 19.55h2.7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438Zm-.8-5h10V5.35H7Zm0 .7v2.8q0 .35.225.575Q7.45 21 7.8 21h8.4q.35 0 .575-.225Q17 20.55 17 20.2v-2.8ZM7 4.65h10V3.8q0-.35-.225-.575Q16.55 3 16.2 3H7.8q-.35 0-.575.225Q7 3.45 7 3.8ZM7 3v1.65V3Zm0 18V17.4 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100.displayName = 'AmauiIconMaterialPhoneAndroidW100';

export default IconMaterialPhoneAndroidW100;
