import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioW100'

      short_name='Radio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V7.4l11.3-4.6.25.65-9.5 3.85H20.7v13.4ZM4 20h16v-7.6H4Zm0-8.3h12.65V9.9h.7v1.8H20V8H4Zm3.8 6.5q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q8.625 14.2 7.8 14.2q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.412.587.588 1.412.588ZM4 12.4V20Z"/>
    </Icon>
  );
});

IconMaterialRadioW100.displayName = 'AmauiIconMaterialRadioW100';

export default IconMaterialRadioW100;
