import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagFilled'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-280v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v440H340Zm80-440h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm260 440v-440h40q33 0 56.5 23.5T800-640v280q0 33-23.5 56.5T720-280h-40Zm-440 0q-33 0-56.5-23.5T160-360v-280q0-33 23.5-56.5T240-720h40v440h-40ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagFilled.displayName = 'AmauiIconMaterialCheckedBagFilled';

export default IconMaterialCheckedBagFilled;
