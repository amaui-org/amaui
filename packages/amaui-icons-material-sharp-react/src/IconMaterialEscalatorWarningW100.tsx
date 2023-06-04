import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorWarningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningW100'

      short_name='EscalatorWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 5.75q-.65 0-1.125-.475T6.2 4.15q0-.65.475-1.125T7.8 2.55q.65 0 1.125.475T9.4 4.15q0 .65-.475 1.125T7.8 5.75Zm8.75 5.65q-.5 0-.875-.363-.375-.362-.375-.887 0-.55.375-.9t.875-.35q.55 0 .9.35t.35.875q0 .55-.35.912-.35.363-.9.363ZM6.1 21.35V14.9H4.4V7.55h5.5l2.5 7.775 3-2.825h3.3v4.6h-1v4.25h-2.3v-7.9l-2.275 2.15H11.6L9.5 9.075V21.35Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningW100.displayName = 'AmauiIconMaterialEscalatorWarningW100';

export default IconMaterialEscalatorWarningW100;
