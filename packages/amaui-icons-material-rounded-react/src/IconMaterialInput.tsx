import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Input'

      short_name='Input'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.8 15.775q-.3-.3-.288-.713.013-.412.313-.712l1.35-1.35H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h9.175L10.8 9.65q-.3-.275-.3-.7 0-.425.3-.725t.713-.3q.412 0 .712.3L15.3 11.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.1 3.1q-.275.275-.687.275-.413 0-.713-.3ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-2q0-.425.288-.713Q2.575 15 3 15t.713.287Q4 15.575 4 16v2h16V6H4v2q0 .425-.287.712Q3.425 9 3 9t-.712-.288Q2 8.425 2 8V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialInput.displayName = 'AmauiIconMaterialInput';

export default IconMaterialInput;
