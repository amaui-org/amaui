import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCafeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100'

      short_name='LocalCafe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8 15.85q-1.125 0-1.912-.788-.788-.787-.788-1.912v-7.2q0-.625.438-1.063.437-.437 1.062-.437h11.3q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.062-.438.438-1.063.438h-1.4v4q0 1.125-.788 1.912-.787.788-1.912.788Zm0-.7h6q.825 0 1.413-.588.587-.587.587-1.412v-8H6.8q-.35 0-.575.225Q6 5.6 6 5.95v7.2q0 .825.588 1.412.587.588 1.412.588Zm8.7-6.7h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4Zm-5.7 1.7Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100.displayName = 'AmauiIconMaterialLocalCafeW100';

export default IconMaterialLocalCafeW100;
