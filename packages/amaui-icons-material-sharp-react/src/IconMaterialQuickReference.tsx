import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReference = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReference'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 896h40V736h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200 256v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM120 976V176h400l240 240v92q-19-6-39-9t-41-3v-40H480V256H200v640h227q11 23 25.5 43t32.5 37H120Zm560-400q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576Z"/>
    </Icon>
  );
});

IconMaterialQuickReference.displayName = 'AmauiIconMaterialQuickReference';

export default IconMaterialQuickReference;
