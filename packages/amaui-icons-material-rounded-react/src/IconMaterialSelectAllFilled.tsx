import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllFilled'

      short_name='SelectAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5q0-.825.587-1.413Q4.175 3 5 3v2Zm0 8v-2h2v2Zm4 8v-2h2v2ZM3 9V7h2v2Zm8-4V3h2v2Zm8 0V3q.825 0 1.413.587Q21 4.175 21 5ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19h2Zm-2-4v-2h2v2ZM7 5V3h2v2Zm4 16v-2h2v2Zm8-8v-2h2v2Zm0 8v-2h2q0 .825-.587 1.413Q19.825 21 19 21Zm0-12V7h2v2Zm0 8v-2h2v2Zm-4 4v-2h2v2Zm0-16V3h2v2ZM8 17q-.425 0-.713-.288Q7 16.425 7 16V8q0-.425.287-.713Q7.575 7 8 7h8q.425 0 .712.287Q17 7.575 17 8v8q0 .425-.288.712Q16.425 17 16 17Zm1-2h6V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAllFilled.displayName = 'AmauiIconMaterialSelectAllFilled';

export default IconMaterialSelectAllFilled;
