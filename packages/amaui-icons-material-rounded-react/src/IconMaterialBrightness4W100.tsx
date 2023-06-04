import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 18.7H6.8q-.625 0-1.062-.438Q5.3 17.825 5.3 17.2v-2.4l-1.75-1.75q-.425-.425-.425-1.05t.425-1.05L5.3 9.2V6.8q0-.625.438-1.062Q6.175 5.3 6.8 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425L14.8 5.3h2.4q.625 0 1.062.438.438.437.438 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05L18.7 14.8v2.4q0 .625-.438 1.062-.437.438-1.062.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425ZM12 12Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm.55-4.525q1.7 0 2.862-1.163Q16.575 13.65 16.575 12t-1.163-2.8Q14.25 8.05 12.55 8.05q-.25 0-.45.025t-.4.075q-.125.05-.187.125-.063.075-.063.2 0 .075.175.325.8.525 1.225 1.388.425.862.425 1.812 0 1-.437 1.863-.438.862-1.238 1.362-.075.05-.175.3 0 .125.075.213.075.087.2.137.25.05.463.075.212.025.387.025Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100.displayName = 'AmauiIconMaterialBrightness4W100';

export default IconMaterialBrightness4W100;
