import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100'

      short_name='MicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 12.95-.55-.6q.075-.2.137-.563.063-.362.063-.787h.7q0 .65-.1 1.112-.1.463-.25.838Zm-5.35-5.375Zm1.7 1.725-.7-.7V5q0-.425-.287-.713Q11.5 4 11.075 4t-.712.287q-.288.288-.288.713v1.55l-.7-.7V5q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v4.3Zm-2.05 11.05V16.7q-2.275-.175-3.812-1.8-1.538-1.625-1.538-3.9h.7q0 2.075 1.462 3.537Q9 16 11.075 16q1.15 0 2.138-.475.987-.475 1.687-1.3l.5.5q-.725.85-1.75 1.375t-2.225.6v3.65Zm9.25-.05L2.125 2.45l.5-.5 17.85 17.85Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100.displayName = 'AmauiIconMaterialMicOffW100';

export default IconMaterialMicOffW100;
