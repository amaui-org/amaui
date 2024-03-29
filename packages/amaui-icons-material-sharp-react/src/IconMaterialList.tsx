import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='List'

      short_name='List'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16t-.287.712Q4.425 17 4 17Zm0-4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11t.713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm0-4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8t-.287.712Q4.425 9 4 9Zm3 8v-2h14v2Zm0-4v-2h14v2Zm0-4V7h14v2Z"/>
    </Icon>
  );
});

IconMaterialList.displayName = 'AmauiIconMaterialList';

export default IconMaterialList;
