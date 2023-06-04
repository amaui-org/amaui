import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextW100'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.35 21.5-.5-.5 3-3-3-3 .5-.5 3.5 3.5ZM8.5 19.7v-2H3.15V4.3h17.4V12h-.7V5h-16v12h13v.7H14.2v2Zm3-5.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm.35-3.35Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextW100.displayName = 'AmauiIconMaterialQueuePlayNextW100';

export default IconMaterialQueuePlayNextW100;
