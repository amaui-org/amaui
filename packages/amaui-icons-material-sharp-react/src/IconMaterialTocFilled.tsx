import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTocFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocFilled'

      short_name='Toc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17v-2h14v2Zm0-4v-2h14v2Zm0-4V7h14v2Zm17 8q-.425 0-.712-.288Q19 16.425 19 16t.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16t-.288.712Q20.425 17 20 17Zm0-4q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11t.712.287Q21 11.575 21 12t-.288.712Q20.425 13 20 13Zm0-4q-.425 0-.712-.288Q19 8.425 19 8t.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Z"/>
    </Icon>
  );
});

IconMaterialTocFilled.displayName = 'AmauiIconMaterialTocFilled';

export default IconMaterialTocFilled;
