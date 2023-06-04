import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m459 612-71 71q-7 7-3 16.5t14 9.5h162q10 0 14-9.5t-3-16.5l-71-71q-9-9-21-9t-21 9ZM232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm528-468v-88q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v88h560Zm-560 28v380q0 12 10 22t22 10h496q12 0 22-10t10-22V444H200Zm0-28V296v120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100.displayName = 'AmauiIconMaterialTopPanelCloseW100';

export default IconMaterialTopPanelCloseW100;
