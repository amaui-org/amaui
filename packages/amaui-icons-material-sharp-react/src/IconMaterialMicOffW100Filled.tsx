import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100Filled'

      short_name='MicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 12.95-.55-.6q.075-.2.137-.563.063-.362.063-.787h.7q0 .65-.1 1.112-.1.463-.25.838Zm-3.65-3.65-3.4-3.45V5q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v4.3Zm-2.05 11.05v-3.6q-2.275-.2-3.812-1.838Q5.375 13.275 5.375 11h.7q0 2.075 1.462 3.537Q9 16 11.075 16q1.15 0 2.138-.475.987-.475 1.687-1.3l.5.5q-.725.85-1.75 1.375t-2.225.65v3.6Zm9.25-.05L2.125 2.45l.5-.5 17.85 17.85Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100Filled.displayName = 'AmauiIconMaterialMicOffW100Filled';

export default IconMaterialMicOffW100Filled;
