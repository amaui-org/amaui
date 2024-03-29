import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOut'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20v-3q0-.425.288-.712Q3.575 16 4 16t.713.288Q5 16.575 5 17v2h2q.425 0 .713.288Q8 19.575 8 20t-.287.712Q7.425 21 7 21Zm13 0q-.425 0-.712-.288Q16 20.425 16 20t.288-.712Q16.575 19 17 19h2v-2q0-.425.288-.712Q19.575 16 20 16t.712.288Q21 16.575 21 17v3q0 .425-.288.712Q20.425 21 20 21Zm-5-2q-2.9 0-4.95-2.05Q5 14.9 5 12q0-2.9 2.05-4.95Q9.1 5 12 5q2.9 0 4.95 2.05Q19 9.1 19 12q0 2.9-2.05 4.95Q14.9 19 12 19Zm0-2q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM4 8q-.425 0-.712-.287Q3 7.425 3 7V4q0-.425.288-.713Q3.575 3 4 3h3q.425 0 .713.287Q8 3.575 8 4t-.287.712Q7.425 5 7 5H5v2q0 .425-.287.713Q4.425 8 4 8Zm16 0q-.425 0-.712-.287Q19 7.425 19 7V5h-2q-.425 0-.712-.288Q16 4.425 16 4t.288-.713Q16.575 3 17 3h3q.425 0 .712.287Q21 3.575 21 4v3q0 .425-.288.713Q20.425 8 20 8Zm-8 4Z"/>
    </Icon>
  );
});

IconMaterialAllOut.displayName = 'AmauiIconMaterialAllOut';

export default IconMaterialAllOut;
