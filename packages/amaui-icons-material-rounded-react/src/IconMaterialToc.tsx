import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toc'

      short_name='Toc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h12q.425 0 .712.287Q17 7.575 17 8t-.288.712Q16.425 9 16 9Zm0 4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h12q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 13 16 13Zm0 4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h12q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 17 16 17Zm16 0q-.425 0-.712-.288Q19 16.425 19 16t.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16t-.288.712Q20.425 17 20 17Zm0-8q-.425 0-.712-.288Q19 8.425 19 8t.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm0 4q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11t.712.287Q21 11.575 21 12t-.288.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialToc.displayName = 'AmauiIconMaterialToc';

export default IconMaterialToc;
