import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100Filled'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.225 18.7h-2.4q-.625 0-1.062-.438-.438-.437-.438-1.062v-2.4l-1.75-1.75Q3.15 12.625 3.15 12t.425-1.05l1.75-1.75V6.8q0-.625.438-1.062Q6.2 5.3 6.825 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425l1.75 1.75h2.4q.625 0 1.063.438.437.437.437 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05l-1.75 1.75v2.4q0 .625-.437 1.062-.438.438-1.063.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425Zm3.35-2.725q1.7 0 2.863-1.163Q16.6 13.65 16.6 12t-1.162-2.8q-1.163-1.15-2.863-1.15-.25 0-.45.025t-.4.075q-.125.05-.187.125-.063.075-.063.2 0 .075.175.325.8.525 1.225 1.388.425.862.425 1.812 0 1-.437 1.863-.438.862-1.238 1.362-.075.05-.175.3 0 .125.075.213.075.087.2.137.25.05.463.075.212.025.387.025Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100Filled.displayName = 'AmauiIconMaterialBrightness4W100Filled';

export default IconMaterialBrightness4W100Filled;
