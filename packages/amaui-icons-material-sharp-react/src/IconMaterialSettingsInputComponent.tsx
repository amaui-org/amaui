import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponent'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23v-4.2H1V6h2V2q0-.425.288-.713Q3.575 1 4 1t.713.287Q5 1.575 5 2v4h2v12.8H5V23Zm8 0v-4.2H9V6h2V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v4h2v12.8h-2V23Zm8 0v-4.2h-2V6h2V2q0-.425.288-.713Q19.575 1 20 1t.712.287Q21 1.575 21 2v4h2v12.8h-2V23ZM3 8v4h2V8Zm8 0v4h2V8Zm8 0v4h2V8ZM3 17h2v-3H3Zm8 0h2v-3h-2Zm8 0h2v-3h-2ZM4 13Zm8 0Zm8 0ZM3 12h2-2Zm8 0h2-2Zm8 0h2-2ZM3 14h2Zm8 0h2Zm8 0h2Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponent.displayName = 'AmauiIconMaterialSettingsInputComponent';

export default IconMaterialSettingsInputComponent;
