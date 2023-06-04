import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelScheduleSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendW100Filled'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.75 17 1.5 1.5q.1.1.238.113.137.012.262-.113t.125-.25q0-.125-.125-.25l-1.5-1.5 1.5-1.5q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-1.5 1.5-1.5-1.5q-.1-.1-.238-.113-.137-.012-.262.113t-.125.25q0 .125.125.25l1.5 1.5-1.5 1.5q-.1.1-.113.238-.012.137.113.262t.25.125q.125 0 .25-.125Zm-12.2-.05v-3.2q0-.275.163-.475.162-.2.437-.25L9.75 12l-4.6-1.025q-.275-.05-.437-.25-.163-.2-.163-.475v-3.3q0-.425.338-.65.337-.225.712-.05l10.625 4.575q-1.875.225-3.325 1.4-1.45 1.175-1.7 3L5.6 17.65q-.375.175-.712-.05-.338-.225-.338-.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendW100Filled.displayName = 'AmauiIconMaterialCancelScheduleSendW100Filled';

export default IconMaterialCancelScheduleSendW100Filled;
