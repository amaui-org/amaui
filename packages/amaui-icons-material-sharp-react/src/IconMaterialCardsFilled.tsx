import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsFilled'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCardsFilled.displayName = 'AmauiIconMaterialCardsFilled';

export default IconMaterialCardsFilled;
