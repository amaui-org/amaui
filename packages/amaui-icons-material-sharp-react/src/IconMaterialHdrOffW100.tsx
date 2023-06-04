import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffW100'

      short_name='HdrOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.65 14.6-.9-2H17.1v1.65l-.7-.7V9.4h4.2v3.15h-1.1l.9 2.05Zm-2.55-2.7h2.8v-1.8h-2.8Zm2.55 8.75L3.3 4.3l.5-.5 16.35 16.35Zm-5.55-9.4L12.25 9.4h.35q.575 0 1.038.45.462.45.462 1.05ZM3.4 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm6.5-4.2.7.7v2.8h2q.15 0 .287-.063.138-.062.263-.187l.5.5q-.2.2-.475.325-.275.125-.575.125H9.9Z"/>
    </Icon>
  );
});

IconMaterialHdrOffW100.displayName = 'AmauiIconMaterialHdrOffW100';

export default IconMaterialHdrOffW100;
