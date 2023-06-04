import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m501 688 71-71q7-7 3-16.5t-14-9.5H399q-10 0-14 9.5t3 16.5l71 71q9 9 21 9t21-9ZM232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm528-468v-88q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v88h560Zm-560 28v380q0 12 10 22t22 10h496q12 0 22-10t10-22V444H200Zm0-28V296v120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100.displayName = 'AmauiIconMaterialTopPanelOpenW100';

export default IconMaterialTopPanelOpenW100;
