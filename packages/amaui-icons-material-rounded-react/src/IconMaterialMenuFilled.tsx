import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuFilled'

      short_name='Menu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialMenuFilled.displayName = 'AmauiIconMaterialMenuFilled';

export default IconMaterialMenuFilled;
