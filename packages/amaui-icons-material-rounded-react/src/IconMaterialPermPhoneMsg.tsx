import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermPhoneMsg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermPhoneMsg'

      short_name='PermPhoneMsg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 12.1q-.25.25-.55.125-.3-.125-.3-.475v-7.8q0-.425.288-.713.287-.287.712-.287h7q.425 0 .712.287.288.288.288.713v5q0 .425-.288.712-.287.288-.712.288h-5ZM14 4.95v3Zm0 3h5v-3h-5ZM19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.05 9 7.7 7.35 7.25 5h-2.2q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.5L15 17.9q.975.425 1.975.7 1 .275 2.025.35Zm-4-1.05ZM6.05 9Z"/>
    </Icon>
  );
});

IconMaterialPermPhoneMsg.displayName = 'AmauiIconMaterialPermPhoneMsg';

export default IconMaterialPermPhoneMsg;
