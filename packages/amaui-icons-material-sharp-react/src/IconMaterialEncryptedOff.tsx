import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOff'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-523q5-8 7-17.5t2-19.5q0-33-23.5-56.5T480-640q-10 0-19.5 2t-17.5 7l108 108Zm203 205-60-62q12-32 19-66.5t7-69.5v-189l-240-90-146 55-62-62 208-78 320 120v244q0 51-11.5 101T754-318Zm38 262L662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56ZM430-418Zm57-170Zm-7 424q35-11 67-31t59-47L488-360h-68l10-58-190-190v92q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOff.displayName = 'AmauiIconMaterialEncryptedOff';

export default IconMaterialEncryptedOff;
