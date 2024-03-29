import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableViewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewFilled'

      short_name='TableView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.825 0-1.412-.587Q7 19.825 7 19V9q0-.825.588-1.413Q8.175 7 9 7h10q.825 0 1.413.587Q21 8.175 21 9v10q0 .825-.587 1.413Q19.825 21 19 21Zm1-10h8q.425 0 .712-.288Q19 10.425 19 10t-.288-.713Q18.425 9 18 9h-8q-.425 0-.712.287Q9 9.575 9 10t.288.712Q9.575 11 10 11Zm3 4h2v-2h-2Zm0 4h2v-2h-2Zm-4-4h2v-2H9Zm8 0h2v-2h-2Zm-8 4h2v-2H9v2Zm8 0h2v-2h-2ZM5 17q-.825 0-1.413-.587Q3 15.825 3 15V5q0-.825.587-1.413Q4.175 3 5 3h10q.825 0 1.413.587Q17 4.175 17 5v1h-2V5H5v10h1v2Z"/>
    </Icon>
  );
});

IconMaterialTableViewFilled.displayName = 'AmauiIconMaterialTableViewFilled';

export default IconMaterialTableViewFilled;
