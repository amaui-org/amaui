import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileUploadOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadOffRoundedW100'
      short_name='FileUploadOff'

      {...props}
    >
      <path d="m12 4.85 3.1 3.1-.5.5-2.25-2.25v3.35l-.7-.7V6.2l-1.325 1.325-.5-.5Zm-8.35-1.2 16.7 16.7-.5.5-2.2-2.2q-.125.025-.225.038-.1.012-.225.012H6.8q-.65 0-1.075-.425Q5.3 17.85 5.3 17.2V15H6v2.2q0 .3.25.55.25.25.55.25H17L3.15 4.15Zm8 11.35v-3.35l.7.7V15Z"/>
    </Icon>
  );
});

IconMaterialFileUploadOffRoundedW100.displayName = 'AmauiIconMaterialFileUploadOffRoundedW100';

export default IconMaterialFileUploadOffRoundedW100;
