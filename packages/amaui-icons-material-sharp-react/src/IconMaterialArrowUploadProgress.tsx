import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUploadProgress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUploadProgress'

      short_name='ArrowUploadProgress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M441-82q-76-8-141.5-41.5t-114.5-87Q136-264 108-333T80-480q0-157 104.5-270T441-878v81q-119 15-200 104.5T160-480q0 123 81 212.5T441-163v81Zm0-198v-247L337-423l-56-57 200-200 200 200-57 56-103-103v247h-80Zm80 198v-81q44-5 83.5-22t72.5-43l57 58q-45 36-99 59T521-82Zm155-650q-33-26-72-43t-83-22v-81q60 6 114 29t99 59l-58 58Zm114 505-57-57q26-33 43-72.5t22-83.5h81q-6 60-29.5 114T790-227Zm8-293q-5-44-22-83.5T733-676l57-57q36 45 59.5 99T879-520h-81Z"/>
    </Icon>
  );
});

IconMaterialArrowUploadProgress.displayName = 'AmauiIconMaterialArrowUploadProgress';

export default IconMaterialArrowUploadProgress;
