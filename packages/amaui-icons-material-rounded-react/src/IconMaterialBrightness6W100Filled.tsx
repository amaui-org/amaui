import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6W100Filled'

      short_name='Brightness6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.225 18.7h-2.4q-.625 0-1.062-.438-.438-.437-.438-1.062v-2.4l-1.75-1.75Q3.15 12.625 3.15 12t.425-1.05l1.75-1.75V6.8q0-.625.438-1.062Q6.2 5.3 6.825 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425l1.75 1.75h2.4q.625 0 1.063.438.437.437.437 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05l-1.75 1.75v2.4q0 .625-.437 1.062-.438.438-1.063.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425Zm2.8-2.7q1.65 0 2.825-1.175Q16.025 13.65 16.025 12q0-1.65-1.175-2.825Q13.675 8 12.025 8Z"/>
    </Icon>
  );
});

IconMaterialBrightness6W100Filled.displayName = 'AmauiIconMaterialBrightness6W100Filled';

export default IconMaterialBrightness6W100Filled;
