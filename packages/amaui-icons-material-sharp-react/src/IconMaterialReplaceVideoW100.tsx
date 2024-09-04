import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceVideoW100'

      short_name='ReplaceVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-160h320v-320H300v320ZM183-600q27-101 109.5-164.5T480-828q91 0 166.5 49T760-648v-128h28v176H612v-28h126q-32-78-102.5-125T480-800q-94 0-168 55T212-600h-29Zm89 468v-376h376v174l100-100v228L648-306v174H272Zm28-28v-320 320Z"/>
    </Icon>
  );
});

IconMaterialReplaceVideoW100.displayName = 'AmauiIconMaterialReplaceVideoW100';

export default IconMaterialReplaceVideoW100;
