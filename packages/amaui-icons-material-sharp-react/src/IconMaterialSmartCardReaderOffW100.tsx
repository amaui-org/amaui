import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOffW100'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M717-878v475l-28-28v-419H276l-27-28h468ZM567-555l-62-63q5-16 18.33-26.5Q536.67-655 554-655q21.04 0 36.02 15.08Q605-624.85 605-603.68q0 16.68-10.5 30.18T567-555Zm-236 76v-200l89 89q-2 54-19.5 82.5T353-479h-22ZM160-210h600l-60-60H160v60Zm692 92-64-64H132v-116h540L271-699v321h-28v-349L90-880l20-20 762 762-20 20Zm-392-92Zm23-431Zm-51 102Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOffW100.displayName = 'AmauiIconMaterialSmartCardReaderOffW100';

export default IconMaterialSmartCardReaderOffW100;
