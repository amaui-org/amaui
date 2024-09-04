import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCombineColumnsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CombineColumnsW100'

      short_name='CombineColumns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-480Zm188 0ZM204-172v-616h216v123h-28v-95H232v560h160v-95h28v123H204Zm336 0v-123h28v95h160v-560H568v95h-28v-123h216v616H540Zm-74-214v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialCombineColumnsW100.displayName = 'AmauiIconMaterialCombineColumnsW100';

export default IconMaterialCombineColumnsW100;
