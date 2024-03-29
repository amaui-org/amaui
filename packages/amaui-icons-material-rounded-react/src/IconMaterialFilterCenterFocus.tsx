import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocus'

      short_name='FilterCenterFocus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15ZM4 9q-.425 0-.712-.288Q3 8.425 3 8V5q0-.825.587-1.413Q4.175 3 5 3h3q.425 0 .713.287Q9 3.575 9 4t-.287.712Q8.425 5 8 5H5v3q0 .425-.287.712Q4.425 9 4 9Zm1 12q-.825 0-1.413-.587Q3 19.825 3 19v-3q0-.425.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16v3h3q.425 0 .713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Zm11 0q-.425 0-.712-.288Q15 20.425 15 20t.288-.712Q15.575 19 16 19h3v-3q0-.425.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16v3q0 .825-.587 1.413Q19.825 21 19 21Zm4-12q-.425 0-.712-.288Q19 8.425 19 8V5h-3q-.425 0-.712-.288Q15 4.425 15 4t.288-.713Q15.575 3 16 3h3q.825 0 1.413.587Q21 4.175 21 5v3q0 .425-.288.712Q20.425 9 20 9Zm-8 4q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocus.displayName = 'AmauiIconMaterialFilterCenterFocus';

export default IconMaterialFilterCenterFocus;
