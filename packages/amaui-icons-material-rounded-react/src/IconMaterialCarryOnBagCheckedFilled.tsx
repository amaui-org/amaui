import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedFilled'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m692-210-41-41q-6-6-15-6t-15 6q-6 6-6 15t6 15l43 43q12 12 28 12t28-12l99-99q6-6 6-15t-6-15q-6-6-15-6t-15 6l-97 97Zm28 170q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v332q-89 29-144.5 102T440-240q0 32 7 61.5t21 58.5h-48Zm-100 0q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedFilled.displayName = 'AmauiIconMaterialCarryOnBagCheckedFilled';

export default IconMaterialCarryOnBagCheckedFilled;
