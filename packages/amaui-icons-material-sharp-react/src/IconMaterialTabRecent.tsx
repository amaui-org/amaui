import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecent'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 1016q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016Zm66-106 28-28-74-74V696h-40v128l86 86ZM520 496h280v52q22 7 42 16.5t38 22.5V256H80v640h372q-6-19-9-39t-3-41H160V336h360v160ZM160 816V336v480Z"/>
    </Icon>
  );
});

IconMaterialTabRecent.displayName = 'AmauiIconMaterialTabRecent';

export default IconMaterialTabRecent;
