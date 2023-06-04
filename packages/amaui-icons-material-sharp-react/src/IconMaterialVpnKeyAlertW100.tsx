import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlertW100'

      short_name='VpnKeyAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M652 764V644H456q-20 54-70 87t-106 33q-78.333 0-133.167-54.765Q92 654.471 92 576.235 92 498 146.833 443 201.667 388 280 388q56 0 106 33t70 87h304v28H434q-8-39-48-79.5T280 416q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 106-40.5t48-79.5h246v120h80v28H652ZM280 616q16.5 0 28.25-11.75T320 576q0-16.5-11.75-28.25T280 536q-16.5 0-28.25 11.75T240 576q0 16.5 11.75 28.25T280 616Zm0-40Zm546.035 200Q815 776 807.5 768.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM812 672V508h28v164h-28Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlertW100.displayName = 'AmauiIconMaterialVpnKeyAlertW100';

export default IconMaterialVpnKeyAlertW100;
