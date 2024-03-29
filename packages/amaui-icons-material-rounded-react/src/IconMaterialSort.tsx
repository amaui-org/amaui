import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sort'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18H4q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h4q.425 0 .713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18ZM20 8H4q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Zm-6 5H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h10q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialSort.displayName = 'AmauiIconMaterialSort';

export default IconMaterialSort;
