import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100'

      short_name='BrightnessAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.775 7.15-3.3 8.375q-.05.175.05.325.1.15.3.15.125 0 .2-.062.075-.063.125-.163l1-2.475h3.75l1 2.475q.05.125.15.175.1.05.2.05.2 0 .312-.163.113-.162.038-.337l-3.325-8.35q-.025-.075-.1-.113Q12.1 7 12.025 7t-.15.037q-.075.038-.1.113Zm-1.375 5.5 1.55-4.1h.1l1.6 4.1ZM9.2 18.7H6.8q-.625 0-1.062-.438Q5.3 17.825 5.3 17.2v-2.4l-1.75-1.75q-.425-.425-.425-1.05t.425-1.05L5.3 9.2V6.8q0-.625.438-1.062Q6.175 5.3 6.8 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425L14.8 5.3h2.4q.625 0 1.062.438.438.437.438 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05L18.7 14.8v2.4q0 .625-.438 1.062-.437.438-1.062.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425ZM12 12Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100.displayName = 'AmauiIconMaterialBrightnessAutoW100';

export default IconMaterialBrightnessAutoW100;
