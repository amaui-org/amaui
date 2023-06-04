import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100Filled'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 17.5h4q.225 0 .362-.15.138-.15.138-.35v-1.6l1.225.65q.2.125.388-.012.187-.138.187-.363v-1.35q0-.225-.187-.363-.188-.137-.388-.012l-1.225.65V13q0-.225-.138-.363-.137-.137-.362-.137h-4q-.2 0-.35.137-.15.138-.15.363v4q0 .2.15.35.15.15.35.15ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.55q.125 0 .263.05.137.05.237.15l3.65 3.65q.1.1.15.237.05.138.05.263V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm8.25-13H18L14.3 4v2.95q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100Filled.displayName = 'AmauiIconMaterialVideoFileW100Filled';

export default IconMaterialVideoFileW100Filled;
