import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M495 495v162q0 10 9.5 14t16.5-3l71-71q9-9 9-21t-9-21l-71-71q-7-7-16.5-3t-9.5 14ZM232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm88-28V296h-88q-12 0-22 10t-10 22v496q0 12 10 22t22 10h88Zm28 0h380q12 0 22-10t10-22V328q0-12-10-22t-22-10H348v560Zm-28 0H200h120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100.displayName = 'AmauiIconMaterialLeftPanelOpenW100';

export default IconMaterialLeftPanelOpenW100;
