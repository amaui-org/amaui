import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineWeight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeight'

      short_name='LineWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 17q-.425 0-.7-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h16.025q.425 0 .7.287.275.288.275.713t-.288.712Q20.425 17 20 17Zm-.5 3q-.2 0-.337-.15Q3 19.7 3 19.5q0-.2.15-.35.15-.15.35-.15h17.025q.2 0 .338.15.137.15.137.35 0 .2-.15.35-.15.15-.35.15ZM4 13q-.425 0-.712-.288Q3 12.425 3 12v-1q0-.425.288-.713Q3.575 10 4 10h16q.425 0 .712.287.288.288.288.713v1q0 .425-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7V5q0-.425.288-.713Q3.575 4 4 4h16q.425 0 .712.287Q21 4.575 21 5v2q0 .425-.288.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialLineWeight.displayName = 'AmauiIconMaterialLineWeight';

export default IconMaterialLineWeight;
