import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeW100'

      short_name='1xMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 750h28V402H226v28h80v320Zm178 0h32l94-157 94 157h34L627 564l97-162h-32l-81 136-81-136h-34l98 164-110 184ZM92 884V268h776v616H92Zm28-28h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeW100.displayName = 'AmauiIconMaterial1xMobiledataBadgeW100';

export default IconMaterial1xMobiledataBadgeW100;
