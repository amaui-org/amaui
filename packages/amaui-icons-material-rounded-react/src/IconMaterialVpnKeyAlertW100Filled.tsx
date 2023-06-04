import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlertW100Filled'

      short_name='VpnKeyAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 616q16.5 0 28.25-11.75T320 576q0-16.5-11.75-28.25T280 536q-16.5 0-28.25 11.75T240 576q0 16.5 11.75 28.25T280 616Zm0 148q-78.333 0-133.167-54.765Q92 654.471 92 576.235 92 498 146.833 443 201.667 388 280 388q71 0 120.5 43T464 536h256v228h-10q-12.75 0-21.375-8.625T680 734V616H464q-14 62-63.5 105T280 764Zm546.035 12Q815 776 807.5 768.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm-.07-104Q820 672 816 667.975T812 658V522q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v136q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlertW100Filled.displayName = 'AmauiIconMaterialVpnKeyAlertW100Filled';

export default IconMaterialVpnKeyAlertW100Filled;
