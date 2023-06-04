import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadW100Filled'

      short_name='FileUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15V6.2L9.4 8.45l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25V15ZM5.3 18.7V15H6v3h12v-3h.7v3.7Z"/>
    </Icon>
  );
});

IconMaterialFileUploadW100Filled.displayName = 'AmauiIconMaterialFileUploadW100Filled';

export default IconMaterialFileUploadW100Filled;
