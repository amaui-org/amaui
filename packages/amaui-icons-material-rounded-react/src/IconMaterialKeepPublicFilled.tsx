import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepPublicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicFilled'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320H160q-17 0-28.5-11.5T120-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h245q-41 40-63 91.5T360-640q0 105 68.5 183.5T600-363v3q0 17-11.5 28.5T560-320H400v223q0 8-3 15.5T388-68l-14 14q-6 6-14 6t-14-6l-14-14q-6-6-9-13.5T320-97v-223Zm320-120q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Zm0-200q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T541-573q17 25 43 39t56 14Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicFilled.displayName = 'AmauiIconMaterialKeepPublicFilled';

export default IconMaterialKeepPublicFilled;
