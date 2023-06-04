import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUpload'

      short_name='FileUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="9.83,8 11,8 11,14 13,14 13,8 14.17,8 12,5.83"/><rect height="2" width="14" x="5" y="18"/><path d="M5,10h4v6h6v-6h4l-7-7L5,10z M13,8v6h-2V8H9.83L12,5.83L14.17,8H13z"/></g></g>
    </Icon>
  );
});

IconMaterialFileUpload.displayName = 'AmauiIconMaterialFileUpload';

export default IconMaterialFileUpload;
