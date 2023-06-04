import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.75 9.85q.525-1.2.85-2.338.325-1.137.275-2.512H16.15l-.625 2.85ZM5 18.825q1.025.075 2.238-.188 1.212-.262 2.312-.787l-2.15-2.2-2.4.475Zm11.2-5.375-.5-.5q.425-.525.887-1.188.463-.662.813-1.262l-2.65-2.425.825-3.775h3.95q.05.25.063.5.012.25.012.55 0 2.075-.95 4.2t-2.45 3.9Zm-10.85 6.1q-.225 0-.525-.012-.3-.013-.525-.063v-3.9l3.35-.7 2.55 2.675q.95-.525 1.875-1.188Q13 15.7 13.85 14.95L3.3 4.4l.5-.5 16.4 16.4-.5.5-5.35-5.35q-2.25 2-4.525 3.05-2.275 1.05-4.475 1.05Zm12.4-9.7Zm-8.2 8Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100.displayName = 'AmauiIconMaterialPhoneDisabledW100';

export default IconMaterialPhoneDisabledW100;
