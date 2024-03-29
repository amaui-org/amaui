import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfile'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 12 15 12Zm0-4q-.425 0-.712-.287Q8 7.425 8 7t.288-.713Q8.575 6 9 6h6q.425 0 .713.287Q16 6.575 16 7t-.287.713Q15.425 8 15 8Zm-3 6h7.5q.725 0 1.35.312.625.313 1.05.888l2.1 2.75V4H6Zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.312Q13.75 16 13.5 16H6v4Zm12 2H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22ZM6 20V4v16Zm0-4v-2 2Z"/>
    </Icon>
  );
});

IconMaterialLabProfile.displayName = 'AmauiIconMaterialLabProfile';

export default IconMaterialLabProfile;
