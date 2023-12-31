import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroceryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroceryW100'

      short_name='Grocery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640.235-132Q562-132 507-186.765q-55-54.764-55-133Q452-398 506.765-453q54.764-55 133-55Q718-508 773-453.235q55 54.764 55 133Q828-242 773.235-187q-54.764 55-133 55ZM640-160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-508-52v-342l102-226h-64v-48h260v48h-64l110 248q-5 3-10.5 8T454-513L336-780h-72L160-547v307h224q2 8 5 15t6 13H132Zm508-356q-21-9-34.5-27.5T592-638q0-24 13.5-42.5T640-708v140q9-21 27.5-34.5T710-616q24 0 42.5 13.5T780-568H640Z"/>
    </Icon>
  );
});

IconMaterialGroceryW100.displayName = 'AmauiIconMaterialGroceryW100';

export default IconMaterialGroceryW100;
