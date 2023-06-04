import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOffW100'

      short_name='VpnKeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-6.9-6.9h-1.3q-.5 1.325-1.7 2.163-1.2.837-2.7.837-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.775 1.15-3.1 1.15-1.325 2.9-1.55L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM17 14.175 15.825 13H17Zm2.4 2.4L18.825 16H19v-3h2v-2h-7.175l-.7-.7H21q.275 0 .488.212.212.213.212.488v2q0 .275-.212.487-.213.213-.488.213h-1.3V16q0 .175-.087.325-.088.15-.213.25ZM7 16q1.575 0 2.588-.938Q10.6 14.125 10.85 13H12L7 8Q5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-3q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q6.6 11 7 11q.425 0 .713.287Q8 11.575 8 12q0 .4-.287.7-.288.3-.713.3Zm7.7-1.125ZM7.5 12Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffW100.displayName = 'AmauiIconMaterialVpnKeyOffW100';

export default IconMaterialVpnKeyOffW100;
