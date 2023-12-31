import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLeftW100'

      short_name='SplitscreenLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-172v-616h216v616H204Zm336 0v-616h216v616H540Zm188-588H568v560h160v-560ZM568-200h160-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLeftW100.displayName = 'AmauiIconMaterialSplitscreenLeftW100';

export default IconMaterialSplitscreenLeftW100;
