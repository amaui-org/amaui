import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindowFilled'

      short_name='NewWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V216h320v80H200v560h560V616h80v320H120Zm520-400V416H520v-80h120V216h80v120h120v80H720v120h-80Z"/>
    </Icon>
  );
});

IconMaterialNewWindowFilled.displayName = 'AmauiIconMaterialNewWindowFilled';

export default IconMaterialNewWindowFilled;
