import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDnsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsW100'

      short_name='Dns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 7.45q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25Zm0 8.4q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25ZM5 5.1h14q.3 0 .5.2t.2.5v4.85q0 .375-.2.612-.2.238-.5.238H5q-.3 0-.5-.238-.2-.237-.2-.612V5.8q0-.3.2-.5t.5-.2Zm0 .7v5h14v-5Zm0 7.7h13.95q.35 0 .55.225.2.225.2.575V19q0 .425-.2.663-.2.237-.55.237H5.05q-.35 0-.55-.237-.2-.238-.2-.663v-4.7q0-.35.175-.575Q4.65 13.5 5 13.5Zm0 .7v5h14v-5Zm0-8.4v5Zm0 8.4v5Z"/>
    </Icon>
  );
});

IconMaterialDnsW100.displayName = 'AmauiIconMaterialDnsW100';

export default IconMaterialDnsW100;
