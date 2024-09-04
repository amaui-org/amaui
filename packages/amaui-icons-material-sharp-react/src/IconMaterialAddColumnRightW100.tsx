import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRightW100'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v560h269v-560H160Zm-28 588v-616h616v114h-28v-86H457v560h263v-86h28v114H132Zm325-308Zm-28 0h28-28Zm0 0Zm291 94v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRightW100.displayName = 'AmauiIconMaterialAddColumnRightW100';

export default IconMaterialAddColumnRightW100;
