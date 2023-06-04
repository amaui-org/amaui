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
      <path d="M7.5 7.45q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25Zm0 8.4q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25ZM4.3 11.5V5.1h15.4v6.4ZM5 5.8v5h14v-5Zm-.7 14.1v-6.4h15.4v6.4Zm.7-5.7v5h14v-5Zm0-8.4v5Zm0 8.4v5Z"/>
    </Icon>
  );
});

IconMaterialDnsW100.displayName = 'AmauiIconMaterialDnsW100';

export default IconMaterialDnsW100;
