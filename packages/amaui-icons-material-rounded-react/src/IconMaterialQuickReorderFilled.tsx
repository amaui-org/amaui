import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReorderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderFilled'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160q-17 0-28.5-11.5T40-200q0-17 11.5-28.5T80-240h160v-80H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h120v-80h-78q-17 0-28.5-11.5T122-520q0-17 11.5-28.5T162-560h78v-118l-61-132q-7-15-1.5-30.5T198-863q15-7 30.5-1.5T251-844l77 164h464l-61-130q-7-15-1.5-30.5T750-863q15-7 30.5-1.5T803-844l69 148q4 8 6 16.5t2 17.5v422q0 33-23.5 56.5T800-160H80Zm400-280h160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderFilled.displayName = 'AmauiIconMaterialQuickReorderFilled';

export default IconMaterialQuickReorderFilled;
