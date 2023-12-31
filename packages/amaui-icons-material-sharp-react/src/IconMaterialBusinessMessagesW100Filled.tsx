import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessMessagesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessagesW100Filled'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-212v-416L122-748h676v536H222Zm270-100 20-20-70-70h204v-28H374l118 118ZM374-530h272L528-648l-20 20 70 70H374v28Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessagesW100Filled.displayName = 'AmauiIconMaterialBusinessMessagesW100Filled';

export default IconMaterialBusinessMessagesW100Filled;
