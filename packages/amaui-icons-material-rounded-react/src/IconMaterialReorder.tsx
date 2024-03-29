import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReorder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reorder'

      short_name='Reorder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15q-.425 0-.712-.288Q3 14.425 3 14t.288-.713Q3.575 13 4 13h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 15 20 15Zm0 4q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Zm0-8q-.425 0-.712-.288Q3 10.425 3 10t.288-.713Q3.575 9 4 9h16q.425 0 .712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm0-4q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h16q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialReorder.displayName = 'AmauiIconMaterialReorder';

export default IconMaterialReorder;
