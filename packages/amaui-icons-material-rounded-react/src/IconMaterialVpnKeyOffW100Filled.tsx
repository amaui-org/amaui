import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOffW100Filled'

      short_name='VpnKeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-6.9-6.9h-1.3q-.5 1.325-1.7 2.163-1.2.837-2.7.837-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.775 1.15-3.1 1.15-1.325 2.9-1.55L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-.9-4.725L13.825 11H21q.275 0 .488.212.212.213.212.488v.6q0 .275-.212.487Q21.275 13 21 13h-2v2.3q0 .175-.087.325-.088.15-.213.25ZM7 13q.425 0 .713-.288Q8 12.425 8 12q0-.225-.062-.4-.063-.175-.188-.3t-.325-.213Q7.225 11 7 11q-.425 0-.713.287Q6 11.575 6 12t.287.712Q6.575 13 7 13Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffW100Filled.displayName = 'AmauiIconMaterialVpnKeyOffW100Filled';

export default IconMaterialVpnKeyOffW100Filled;
