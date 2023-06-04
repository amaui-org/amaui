import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCopyAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllFilled'

      short_name='CopyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-6-1h2v-2H3Zm0-3.5h2v-2H3ZM10 22h2v-2h-2Zm-7-3.5h2v-2H3ZM5 22v-2H3q0 .825.587 1.413Q4.175 22 5 22Zm1.5 0h2v-2h-2Zm7 0q.825 0 1.413-.587.587-.588.587-1.413h-2ZM3 8h2V6q-.825 0-1.413.588Q3 7.175 3 8Z"/>
    </Icon>
  );
});

IconMaterialCopyAllFilled.displayName = 'AmauiIconMaterialCopyAllFilled';

export default IconMaterialCopyAllFilled;
