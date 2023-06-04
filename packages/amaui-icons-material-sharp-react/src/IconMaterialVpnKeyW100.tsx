import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyW100'

      short_name='VpnKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3q1.4 0 2.65.825T11.4 10.3h10.3v3.4h-2v3h-3.4v-3h-4.9q-.5 1.35-1.75 2.175Q8.4 16.7 7 16.7Zm0-.7q1.65 0 2.65-1.012 1-1.013 1.2-1.988H17v3h2v-3h2v-2H10.85q-.2-.975-1.2-1.988Q8.65 8 7 8T4.175 9.175Q3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-3q.425 0 .713-.3Q8 12.4 8 12q0-.425-.287-.713Q7.425 11 7 11q-.4 0-.7.287-.3.288-.3.713 0 .4.3.7.3.3.7.3Zm0-1Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyW100.displayName = 'AmauiIconMaterialVpnKeyW100';

export default IconMaterialVpnKeyW100;
