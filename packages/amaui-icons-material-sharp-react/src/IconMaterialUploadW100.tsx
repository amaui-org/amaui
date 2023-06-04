import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadW100'

      short_name='Upload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15V6.2L9.4 8.45l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25V15ZM5.3 18.7V15H6v3h12v-3h.7v3.7Z"/>
    </Icon>
  );
});

IconMaterialUploadW100.displayName = 'AmauiIconMaterialUploadW100';

export default IconMaterialUploadW100;
