import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRecordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRecordW100'

      short_name='ScreenRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M181-302q-23-39-36-84t-13-94q0-49 13-93.5t36-83.5l20 20q-20 35-30.5 74.5T160-480q0 43 10.5 83t30.5 75l-20 20Zm299 170q-49 0-93.5-13T303-181l20-20q35 20 74.5 30.5T480-160q43 0 82.5-10.5T637-201l20 20q-39 23-83.5 36T480-132Zm299-171-20-20q20-35 30.5-74.5T800-480q0-43-10.5-82.5T759-637l20-20q23 39 36 83.5t13 93.5q0 49-13 93.5T779-303ZM323-759l-20-20q39-23 83.5-36t93.5-13q49 0 94 13t84 36l-20 20q-35-20-75-30.5T480-800q-43 0-82.5 10.5T323-759Zm157 453q-72 0-123-51t-51-123q0-72 51-123t123-51q72 0 123 51t51 123q0 72-51 123t-123 51Z"/>
    </Icon>
  );
});

IconMaterialScreenRecordW100.displayName = 'AmauiIconMaterialScreenRecordW100';

export default IconMaterialScreenRecordW100;
