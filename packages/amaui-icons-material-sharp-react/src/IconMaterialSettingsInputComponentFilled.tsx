import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentFilled'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23v-4.2h-2V14h6v4.8h-2V23Zm-8 0v-4.2H9V14h6v4.8h-2V23Zm-8 0v-4.2H1V14h6v4.8H5V23ZM1 12V6h2V2q0-.425.288-.713Q3.575 1 4 1t.713.287Q5 1.575 5 2v4h2v6Zm8 0V6h2V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v4h2v6Zm8 0V6h2V2q0-.425.288-.713Q19.575 1 20 1t.712.287Q21 1.575 21 2v4h2v6Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentFilled.displayName = 'AmauiIconMaterialSettingsInputComponentFilled';

export default IconMaterialSettingsInputComponentFilled;
