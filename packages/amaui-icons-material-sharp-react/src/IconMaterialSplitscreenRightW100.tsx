import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightW100'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-172v-616h216v616H540Zm-336 0v-616h216v616H204Zm28-588v560h160v-560H232Zm160 560H232h160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightW100.displayName = 'AmauiIconMaterialSplitscreenRightW100';

export default IconMaterialSplitscreenRightW100;
