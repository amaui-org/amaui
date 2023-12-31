import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsmodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsmodeW100'

      short_name='Newsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h696v616H132Zm28-28h640v-560H160v560Zm120-120h400v-28H280v28Zm0-146h128v-174H280v174Zm228 0h172v-28H508v28Zm0-146h172v-28H508v28ZM160-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialNewsmodeW100.displayName = 'AmauiIconMaterialNewsmodeW100';

export default IconMaterialNewsmodeW100;
