import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialE911Avatar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911Avatar'

      short_name='E911Avatar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 7q-.425 0-.712-.287Q16 6.425 16 6V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v3q0 .425-.288.713Q17.425 7 17 7Zm0 4q-.425 0-.712-.288Q16 10.425 16 10t.288-.713Q16.575 9 17 9t.712.287Q18 9.575 18 10t-.288.712Q17.425 11 17 11Zm2.95 10q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.425 1.988.675 1.012.25 2.037.325Zm-4-1.025ZM6.025 9Z"/>
    </Icon>
  );
});

IconMaterialE911Avatar.displayName = 'AmauiIconMaterialE911Avatar';

export default IconMaterialE911Avatar;
