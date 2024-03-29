import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermPhoneMsgFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermPhoneMsgFilled'

      short_name='PermPhoneMsg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 12.1q-.25.25-.55.125-.3-.125-.3-.475v-7.8q0-.425.288-.713.287-.287.712-.287h7q.425 0 .712.287.288.288.288.713v5q0 .425-.288.712-.287.288-.712.288h-5Zm7.1 8.9q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPermPhoneMsgFilled.displayName = 'AmauiIconMaterialPermPhoneMsgFilled';

export default IconMaterialPermPhoneMsgFilled;
