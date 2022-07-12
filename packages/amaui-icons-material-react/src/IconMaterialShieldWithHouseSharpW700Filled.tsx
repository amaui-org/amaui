import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseSharpW700Filled'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m12 10.25 5.125 4q.275-.725.425-1.525.15-.8.15-1.625v-.4L12 6.275 6.3 10.7v.4q0 .825.15 1.625t.425 1.525Zm0 9.375q.7-.275 1.35-.7Q14 18.5 14.575 18v-3.575h-5.15V18q.575.5 1.225.925.65.425 1.35.7Zm0 3.25q-3.85-.95-6.35-4.313-2.5-3.362-2.5-7.462V4.425l8.85-3.3 8.85 3.3V11.1q0 4.1-2.5 7.462-2.5 3.363-6.35 4.313Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseSharpW700Filled;
