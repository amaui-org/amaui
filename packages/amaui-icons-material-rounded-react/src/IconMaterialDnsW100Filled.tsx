import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDnsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsW100Filled'

      short_name='Dns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11.5q-.3 0-.5-.238-.2-.237-.2-.612V5.8q0-.3.2-.5t.5-.2h14q.3 0 .5.2t.2.5v4.85q0 .375-.2.612-.2.238-.5.238Zm2.5-2.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM5.05 19.9q-.35 0-.55-.237-.2-.238-.2-.663v-4.7q0-.35.175-.575Q4.65 13.5 5 13.5h13.95q.35 0 .55.225.2.225.2.575V19q0 .425-.2.663-.2.237-.55.237Zm2.45-2.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialDnsW100Filled.displayName = 'AmauiIconMaterialDnsW100Filled';

export default IconMaterialDnsW100Filled;
