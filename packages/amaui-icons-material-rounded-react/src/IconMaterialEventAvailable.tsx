import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventAvailable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailable'

      short_name='EventAvailable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.25 17.65-2.125-2.125q-.3-.3-.3-.725t.3-.725q.3-.3.725-.3t.725.3l1.375 1.375 3.475-3.475q.3-.3.725-.3t.725.3q.3.3.3.725t-.3.725L11.65 17.65q-.3.3-.7.3-.4 0-.7-.3ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialEventAvailable.displayName = 'AmauiIconMaterialEventAvailable';

export default IconMaterialEventAvailable;
