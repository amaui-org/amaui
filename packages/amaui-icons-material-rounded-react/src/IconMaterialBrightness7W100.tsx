import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness7W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7W100'

      short_name='Brightness7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 18.7H6.8q-.625 0-1.062-.438Q5.3 17.825 5.3 17.2v-2.4l-1.75-1.75q-.425-.425-.425-1.05t.425-1.05L5.3 9.2V6.8q0-.625.438-1.062Q6.175 5.3 6.8 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425L14.8 5.3h2.4q.625 0 1.062.438.438.437.438 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05L18.7 14.8v2.4q0 .625-.438 1.062-.437.438-1.062.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425ZM12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-4Zm0 3.3q1.35 0 2.325-.975.975-.975.975-2.325t-.975-2.325Q13.35 8.7 12 8.7t-2.325.975Q8.7 10.65 8.7 12t.975 2.325q.975.975 2.325.975Zm0 5.2 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm0-5.2q1.35 0 2.325-.975.975-.975.975-2.325t-.975-2.325Q13.35 8.7 12 8.7t-2.325.975Q8.7 10.65 8.7 12t.975 2.325q.975.975 2.325.975Z"/>
    </Icon>
  );
});

IconMaterialBrightness7W100.displayName = 'AmauiIconMaterialBrightness7W100';

export default IconMaterialBrightness7W100;
