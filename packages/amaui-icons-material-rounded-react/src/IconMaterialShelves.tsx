import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelves = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shelves'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23q-.425 0-.712-.288Q3 22.425 3 22V2q0-.425.288-.713Q3.575 1 4 1t.713.287Q5 1.575 5 2v1h14V2q0-.425.288-.713Q19.575 1 20 1t.712.287Q21 1.575 21 2v20q0 .425-.288.712Q20.425 23 20 23t-.712-.288Q19 22.425 19 22v-1H5v1q0 .425-.287.712Q4.425 23 4 23Zm1-12h2V8q0-.425.287-.713Q7.575 7 8 7h4q.425 0 .713.287Q13 7.575 13 8v3h6V5H5Zm0 8h6v-3q0-.425.288-.713Q11.575 15 12 15h4q.425 0 .712.287.288.288.288.713v3h2v-6H5Zm4-8h2V9H9Zm4 8h2v-2h-2Zm-4-8h2Zm4 8h2Z"/>
    </Icon>
  );
});

IconMaterialShelves.displayName = 'AmauiIconMaterialShelves';

export default IconMaterialShelves;
