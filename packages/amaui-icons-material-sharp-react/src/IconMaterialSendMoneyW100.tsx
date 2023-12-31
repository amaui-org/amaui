import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendMoneyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendMoneyW100'

      short_name='SendMoney'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-224Q139-257 96.5-334T54-480q0-69 42.5-146T242-736v30q-71 24-115.5 86T82-480q0 78 44.5 140T242-254v30Zm320 12q-112 0-190-78t-78-190q0-112 78-190t190-78q51 0 97.5 18t83.5 51l-20 20q-32-29-72.5-45T562-720q-100 0-170 70t-70 170q0 100 70 170t170 70q48 0 88.5-16t72.5-45l20 20q-37 33-83.5 51T562-212Zm220-144-20-20 90-90H528v-28h324l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialSendMoneyW100.displayName = 'AmauiIconMaterialSendMoneyW100';

export default IconMaterialSendMoneyW100;
