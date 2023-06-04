import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 17.5h4q.2 0 .35-.15.15-.15.15-.35v-1.6l1.225.65q.2.125.388-.012.187-.138.187-.363v-1.35q0-.225-.187-.363-.188-.137-.388-.012l-1.225.65V13q0-.2-.15-.35-.15-.15-.35-.15h-4q-.2 0-.35.15-.15.15-.15.35v4q0 .2.15.35.15.15.35.15ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .575.112.275.113.5.338l3.15 3.15q.225.225.337.5.113.275.113.575V19.2q0 .65-.425 1.075-.425.425-1.075.425ZM14.3 4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55V7.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537ZM6 4v3.7V4v16V4Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100.displayName = 'AmauiIconMaterialVideoFileW100';

export default IconMaterialVideoFileW100;
