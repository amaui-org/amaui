import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagFilled'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-100q-25 0-42.5-17.5T580-160q0-25 17.5-42.5T640-220q25 0 42.5 17.5T700-160q0 25-17.5 42.5T640-100Zm-320-20q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Zm100 0v-560h140v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v560q-50 0-85 35t-35 85q0 11 1.5 20.5T527-120H420Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagFilled.displayName = 'AmauiIconMaterialCarryOnBagFilled';

export default IconMaterialCarryOnBagFilled;
