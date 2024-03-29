import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseSidingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingFilled'

      short_name='HouseSiding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-7H3.3q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275l8.35 7.525q.275.225.15.55Q21.05 12 20.7 12H19v7q0 .425-.288.712Q18.425 20 18 20t-.712-.288Q17 19.425 17 19v-1H7v1q0 .425-.287.712Q6.425 20 6 20ZM9.45 8h5.1L12 5.7ZM7 12h10v-1.8l-.225-.2h-9.55L7 10.2Zm0 4h10v-2H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingFilled.displayName = 'AmauiIconMaterialHouseSidingFilled';

export default IconMaterialHouseSidingFilled;
