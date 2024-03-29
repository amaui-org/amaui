import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExitToAppFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppFilled'

      short_name='ExitToApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 16.275q-.3-.3-.288-.725.013-.425.313-.725L11.65 13H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h7.65L9.8 9.15q-.3-.3-.3-.712 0-.413.3-.713t.713-.3q.412 0 .712.3L14.8 11.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.275.275-.687.275-.413 0-.713-.3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-3q0-.425.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16v3h14V5H5v3q0 .425-.287.712Q4.425 9 4 9t-.712-.288Q3 8.425 3 8V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialExitToAppFilled.displayName = 'AmauiIconMaterialExitToAppFilled';

export default IconMaterialExitToAppFilled;
