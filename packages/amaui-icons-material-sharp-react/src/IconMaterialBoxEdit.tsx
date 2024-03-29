import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEdit'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-720h528l-34-40H250l-34 40Zm184 270 80-40 80 40v-190H400v190ZM120-120v-608l92-112h536l92 112v172l-80 7v-91H640v200l-80 80-80-40-160 80v-320H200v440h280v80H120Zm520-520h120-120Zm-440 0h360-360Zm360 520v-127l172-172 43 43-155 154v42h42l155-154 42 42-172 172H560Zm299-172L732-419l78-78 127 127-78 78Z"/>
    </Icon>
  );
});

IconMaterialBoxEdit.displayName = 'AmauiIconMaterialBoxEdit';

export default IconMaterialBoxEdit;
