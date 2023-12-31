import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessMessagesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessagesW100'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-212v-416L122-748h676v536H222Zm28-508v480h520v-480H250Zm242 408 20-20-70-70h204v-28H374l118 118ZM374-530h272L528-648l-20 20 70 70H374v28ZM250-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessagesW100.displayName = 'AmauiIconMaterialBusinessMessagesW100';

export default IconMaterialBusinessMessagesW100;
