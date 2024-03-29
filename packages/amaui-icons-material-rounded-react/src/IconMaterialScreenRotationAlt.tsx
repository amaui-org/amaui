import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAlt'

      short_name='ScreenRotationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.175 21.4-6.65-6.65q-.3-.3-.312-.713-.013-.412.287-.712t.713-.3q.412 0 .712.3L13.6 20l5-5H17q-.425 0-.712-.288Q16 14.425 16 14t.288-.713Q16.575 13 17 13h4q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712Q21.425 19 21 19t-.712-.288Q20 18.425 20 18v-1.6l-5 5q-.575.575-1.412.575-.838 0-1.413-.575ZM7 11H3q-.425 0-.712-.288Q2 10.425 2 10V6q0-.425.288-.713Q2.575 5 3 5t.713.287Q4 5.575 4 6v1.6l5-5q.575-.575 1.413-.575.837 0 1.412.575l6.65 6.65q.3.3.313.712.012.413-.288.713t-.712.3q-.413 0-.713-.3L10.4 4l-5 5H7q.425 0 .713.287Q8 9.575 8 10t-.287.712Q7.425 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAlt.displayName = 'AmauiIconMaterialScreenRotationAlt';

export default IconMaterialScreenRotationAlt;
