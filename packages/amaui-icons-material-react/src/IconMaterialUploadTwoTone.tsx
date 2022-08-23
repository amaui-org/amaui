import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadTwoTone'
      short_name='Upload'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"/><path d="M12 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z"/>
    </Icon>
  );
});

IconMaterialUploadTwoTone.displayName = 'AmauiIconMaterialUploadTwoTone';

export default IconMaterialUploadTwoTone;
