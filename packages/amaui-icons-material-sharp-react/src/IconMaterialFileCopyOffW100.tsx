import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffW100'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m788-281-28-28v-383H612v-148H320v84l-28-28v-84h334l162 162v425Zm-468 1h320L320-600v320ZM828-92 668-252H292v-376L92-828l20-20 736 736-20 20ZM540-575Zm-60 135ZM132-92v-496h28v468h428v28H132Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffW100.displayName = 'AmauiIconMaterialFileCopyOffW100';

export default IconMaterialFileCopyOffW100;
