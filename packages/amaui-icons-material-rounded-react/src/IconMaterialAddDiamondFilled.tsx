import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondFilled'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-16 0-30.5-5.5T424-103L105-423q-11-12-18-26.5T80-480q0-16 7-30.5t18-25.5l319-320q12-12 26-18t30-6q16 0 31 6t26 18l318 320q11 12 18 26t7 30q0 16-6.5 30.5T855-423L537-103q-11 11-26 17t-31 6Zm-40-360v80q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-80h80q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520h-80v-80q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v80h-80q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h80Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondFilled.displayName = 'AmauiIconMaterialAddDiamondFilled';

export default IconMaterialAddDiamondFilled;
