import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingFilled'

      short_name='PhonelinkRing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.8 17.3-1.4-1.4q.775-.775 1.2-1.775.425-1 .425-2.125T20.6 9.875q-.425-1-1.2-1.775l1.4-1.4q1.075 1.05 1.65 2.425.575 1.375.575 2.875t-.575 2.875q-.575 1.375-1.65 2.425Zm-2.45-2.45L16.9 13.4q.3-.275.463-.638.162-.362.162-.762t-.162-.762q-.163-.363-.463-.638l1.45-1.45q.575.575.875 1.312.3.738.3 1.538t-.3 1.537q-.3.738-.875 1.313ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingFilled.displayName = 'AmauiIconMaterialPhonelinkRingFilled';

export default IconMaterialPhonelinkRingFilled;
