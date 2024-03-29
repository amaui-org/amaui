import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBox'

      short_name='IndeterminateCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm-3 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBox.displayName = 'AmauiIconMaterialIndeterminateCheckBox';

export default IconMaterialIndeterminateCheckBox;
