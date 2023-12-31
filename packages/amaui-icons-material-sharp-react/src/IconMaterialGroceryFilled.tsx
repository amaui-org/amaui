import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroceryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroceryFilled'

      short_name='Grocery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170T640-80Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-560 0v-402l86-198h-46v-120h360v120h-46l66 152q-19 10-36 21t-32 25l-84-198h-96l-92 216v304h170q5 21 13.5 41.5T364-160H80Zm560-440q-42 0-71-29t-29-71q0-42 29-71t71-29v200q0-42 29-71t71-29q42 0 71 29t29 71H640Z"/>
    </Icon>
  );
});

IconMaterialGroceryFilled.displayName = 'AmauiIconMaterialGroceryFilled';

export default IconMaterialGroceryFilled;
