import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfoI = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoI'

      short_name='InfoI'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm0 560q-25 0-42.5-17.5T420-180v-360q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540v360q0 25-17.5 42.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialInfoI.displayName = 'AmauiIconMaterialInfoI';

export default IconMaterialInfoI;
