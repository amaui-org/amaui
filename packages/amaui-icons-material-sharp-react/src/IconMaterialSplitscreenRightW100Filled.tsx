import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightW100Filled'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-172v-616h216v616H540Zm-336 0v-616h216v616H204Zm28-588v560h160v-560H232Zm160 0v560H232v-560h160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightW100Filled.displayName = 'AmauiIconMaterialSplitscreenRightW100Filled';

export default IconMaterialSplitscreenRightW100Filled;
