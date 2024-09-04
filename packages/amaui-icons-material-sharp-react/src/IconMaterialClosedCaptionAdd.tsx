import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAdd'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm120 320H120v-640h720v400h-80v-320H200v480h400v80Zm160 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-360h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm280 0h200v-80h-60v20h-80v-120h80v20h60v-80H520v240Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAdd.displayName = 'AmauiIconMaterialClosedCaptionAdd';

export default IconMaterialClosedCaptionAdd;
