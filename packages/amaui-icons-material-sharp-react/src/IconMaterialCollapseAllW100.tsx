import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseAllW100'

      short_name='CollapseAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-116-20-20 204-204 204 204-20 20-184-184-184 184Zm184-504L276-824l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialCollapseAllW100.displayName = 'AmauiIconMaterialCollapseAllW100';

export default IconMaterialCollapseAllW100;
