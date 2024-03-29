import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokeFree = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFree'

      short_name='SmokeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.85 16-.85-.85V13h1.5v3ZM17 14.15 15.85 13H17ZM20.5 16v-3H22v3Zm-.7 6.6L13.2 16H2v-3h8.2L1.4 4.2l1.4-1.4 18.4 18.4ZM18 12v-1.3q0-.975-.575-1.488Q16.85 8.7 16.05 8.7H14.5q-1.4 0-2.375-.975-.975-.975-.975-2.375t.975-2.375Q13.1 2 14.5 2v1.5q-.75 0-1.3.525t-.55 1.325q0 .8.55 1.325.55.525 1.3.525h1.55q1.4 0 2.425.9t1.025 2.25V12Zm2.5 0V9.75q0-1.65-1.15-2.85-1.15-1.2-2.85-1.2V4.2q.75 0 1.3-.55t.55-1.3h1.5q0 .725-.275 1.312-.275.588-.725 1.088 1.4.65 2.275 2t.875 3V12Z"/>
    </Icon>
  );
});

IconMaterialSmokeFree.displayName = 'AmauiIconMaterialSmokeFree';

export default IconMaterialSmokeFree;
