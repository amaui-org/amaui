import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarlyOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnW100'

      short_name='EarlyOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 18.6q-1.075 0-1.837-.763Q14.4 17.075 14.4 16q0-1.1.763-1.85.762-.75 1.837-.75 1.1 0 1.85.75T19.6 16q0 1.075-.75 1.837-.75.763-1.85.763Zm-.35-6.5v-1.7h.7v1.7Zm0 9.5v-1.7h.7v1.7Zm3.375-8.125-.5-.5 1.2-1.2.5.5ZM13.3 20.2l-.5-.475L14 18.5l.5.5Zm7.6-3.85v-.7h1.7v.7Zm-9.5 0v-.7h1.7v.7Zm9.325 3.85-1.2-1.2.5-.5 1.2 1.2ZM14 13.475l-1.2-1.2.5-.5 1.2 1.2ZM4.3 18.7V3.3h3.5V1h.8v2.3h6.9V1h.7v2.3h3.5v5.5H5V18h4.8v.7ZM5 8.1h14V4H5Zm0 0V4v4.1Z"/>
    </Icon>
  );
});

IconMaterialEarlyOnW100.displayName = 'AmauiIconMaterialEarlyOnW100';

export default IconMaterialEarlyOnW100;
