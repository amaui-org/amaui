import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFilled'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm7-9h2V8h-2Zm0 3h2v-2h-2Zm-3-3h2V8H8Zm0 3h2v-2H8Zm-3 0h2v-2H5Zm0-3h2V8H5Zm4 6h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm5-3h2v-2h-2Zm0-3h2V8h-2Zm3 3h2v-2h-2Zm0-3h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFilled.displayName = 'AmauiIconMaterialKeyboardFilled';

export default IconMaterialKeyboardFilled;
