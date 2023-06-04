import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioW100Filled'

      short_name='Radio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V8.8q0-.7.463-1.238.462-.537 1.112-.812l9.4-3.825q.125-.05.263.013.137.062.187.187.05.125-.012.262-.063.138-.188.188L5.35 7.3H19.2q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438Zm-.8-9h12.65v-1.45q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.45H20V8.8q0-.35-.225-.575Q19.55 8 19.2 8H4.8q-.35 0-.575.225Q4 8.45 4 8.8Zm3.8 6.5q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q8.625 14.2 7.8 14.2q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.412.587.588 1.412.588Z"/>
    </Icon>
  );
});

IconMaterialRadioW100Filled.displayName = 'AmauiIconMaterialRadioW100Filled';

export default IconMaterialRadioW100Filled;
