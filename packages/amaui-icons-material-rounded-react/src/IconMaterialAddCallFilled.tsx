import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCallFilled'

      short_name='AddCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 10.95q-.425 0-.712-.288Q16 10.375 16 9.95v-2h-2q-.425 0-.712-.288Q13 7.375 13 6.95t.288-.713q.287-.287.712-.287h2v-2q0-.425.288-.713.287-.287.712-.287t.712.287q.288.288.288.713v2h2q.425 0 .712.287.288.288.288.713t-.288.712q-.287.288-.712.288h-2v2q0 .425-.288.712-.287.288-.712.288ZM19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialAddCallFilled.displayName = 'AmauiIconMaterialAddCallFilled';

export default IconMaterialAddCallFilled;
