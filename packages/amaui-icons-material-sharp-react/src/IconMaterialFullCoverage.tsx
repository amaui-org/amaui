import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullCoverage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverage'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-560h80v480h600v80H80Zm160-160v-560h680v560H240Zm80-80h520v-400H320v400Zm80-120h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80ZM320-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialFullCoverage.displayName = 'AmauiIconMaterialFullCoverage';

export default IconMaterialFullCoverage;
