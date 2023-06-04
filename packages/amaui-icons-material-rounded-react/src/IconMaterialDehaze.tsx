import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDehaze = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dehaze'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.425 0-.712-.288Q2 17.425 2 17t.288-.712Q2.575 16 3 16h18q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 18 21 18Zm0-5q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h18q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13Zm0-5q-.425 0-.712-.287Q2 7.425 2 7t.288-.713Q2.575 6 3 6h18q.425 0 .712.287Q22 6.575 22 7t-.288.713Q21.425 8 21 8Z"/>
    </Icon>
  );
});

IconMaterialDehaze.displayName = 'AmauiIconMaterialDehaze';

export default IconMaterialDehaze;
