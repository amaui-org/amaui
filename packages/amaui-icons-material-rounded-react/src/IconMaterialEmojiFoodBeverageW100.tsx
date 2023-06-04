import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8 15.85q-1.125 0-1.912-.788-.788-.787-.788-1.912v-7.2q0-.625.438-1.063.437-.437 1.062-.437h11.3q.65 0 1.075.425.425.425.425 1.075v1.7q0 .65-.425 1.075-.425.425-1.075.425h-1.4v4q0 1.125-.788 1.912-.787.788-1.912.788Zm8.7-7.4h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4ZM8 15.15h6q.825 0 1.413-.588.587-.587.587-1.412v-8H9.85V6.4l1.45 1.2q.05.05.2.4v2.65q0 .2-.15.35-.15.15-.35.15H8q-.2 0-.35-.15-.15-.15-.15-.35V8q0-.05.2-.4l1.45-1.2V5.15H6.8q-.35 0-.575.225Q6 5.6 6 5.95v7.2q0 .825.588 1.412.587.588 1.412.588Zm1.15-10h.7Zm1.85 5Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100.displayName = 'AmauiIconMaterialEmojiFoodBeverageW100';

export default IconMaterialEmojiFoodBeverageW100;
