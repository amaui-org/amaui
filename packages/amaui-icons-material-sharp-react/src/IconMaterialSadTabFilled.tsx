import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSadTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SadTabFilled'

      short_name='SadTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M300 756h60v-60h240v60h60v-60h-60v-60H360v60h-60v60Zm20-180h60V476h-60v100Zm260 0h60V476h-60v100ZM80 896V256h320l80 80h400v560H80Z"/>
    </Icon>
  );
});

IconMaterialSadTabFilled.displayName = 'AmauiIconMaterialSadTabFilled';

export default IconMaterialSadTabFilled;
