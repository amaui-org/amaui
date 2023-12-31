import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkUpdateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateFilled'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m700-196-58-58q-6-6-14-6t-14 6q-6 6-6 14t6 14l92 92q6 6 14 6t14-6l92-92q6-6 6-14t-6-14q-6-6-14-6t-14 6l-58 58v-144q0-8-6-14t-14-6q-8 0-14 6t-6 14v144ZM400-720h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-560-80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-35-25-76-38t-84-13q-116 0-198 82t-82 198q0 31 6.5 61.5T467-120H160Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateFilled.displayName = 'AmauiIconMaterialWorkUpdateFilled';

export default IconMaterialWorkUpdateFilled;
