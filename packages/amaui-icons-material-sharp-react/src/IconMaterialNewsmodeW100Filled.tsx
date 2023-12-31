import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsmodeW100Filled'

      short_name='Newsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h696v616H132Zm148-148h400v-28H280v28Zm0-146h128v-174H280v174Zm228 0h172v-28H508v28Zm0-146h172v-28H508v28Z"/>
    </Icon>
  );
});

IconMaterialNewsmodeW100Filled.displayName = 'AmauiIconMaterialNewsmodeW100Filled';

export default IconMaterialNewsmodeW100Filled;
