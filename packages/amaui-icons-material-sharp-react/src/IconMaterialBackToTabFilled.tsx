import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackToTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabFilled'

      short_name='BackToTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M331 564 160 393v143H80V256h280v80H216l172 171-57 57ZM80 896V616h80v200h320v80H80Zm720-280V336H440v-80h440v360h-80Zm80 80v200H560V696h320Z"/>
    </Icon>
  );
});

IconMaterialBackToTabFilled.displayName = 'AmauiIconMaterialBackToTabFilled';

export default IconMaterialBackToTabFilled;
