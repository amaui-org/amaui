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
      <path d="m360-40-40-40v-240H120v-80l80-80v-280h-40v-80h285q-41 40-63 91.5T360-640q0 105 68.5 183.5T600-363v43H400v240l-40 40Zm280-400q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Zm0-200q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T541-573q17 25 43 39t56 14Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicFilled.displayName = 'AmauiIconMaterialKeepPublicFilled';

export default IconMaterialKeepPublicFilled;
