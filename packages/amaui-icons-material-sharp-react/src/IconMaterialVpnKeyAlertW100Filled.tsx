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
      <path d="M280 616q16.5 0 28.25-11.75T320 576q0-16.5-11.75-28.25T280 536q-16.5 0-28.25 11.75T240 576q0 16.5 11.75 28.25T280 616Zm546.035 160Q815 776 807.5 768.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM812 672V508h28v164h-28Zm-532 92q-78.333 0-133.167-54.765Q92 654.471 92 576.235 92 498 146.833 443 201.667 388 280 388q71 0 120.5 43T464 536h256v228h-40V616H464q-14 62-63.5 105T280 764Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlertW100Filled.displayName = 'AmauiIconMaterialVpnKeyAlertW100Filled';

export default IconMaterialVpnKeyAlertW100Filled;
