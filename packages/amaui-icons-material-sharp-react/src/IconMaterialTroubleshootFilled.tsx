import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTroubleshootFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TroubleshootFilled'

      short_name='Troubleshoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M824-120 636-308q-41 32-90.5 50T440-240q-90 0-162.5-44T163-400h98q34 37 79.5 58.5T440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-94 0-162.5 63.5T201-580h-80q8-127 99.5-213.5T440-880q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM397-400l-63-208-52 148H80v-60h160l66-190h60l61 204 43-134h60l60 120h30v60h-67l-47-94-50 154h-59Z"/>
    </Icon>
  );
});

IconMaterialTroubleshootFilled.displayName = 'AmauiIconMaterialTroubleshootFilled';

export default IconMaterialTroubleshootFilled;
