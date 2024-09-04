import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultimodalHandEyeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultimodalHandEyeFilled'

      short_name='MultimodalHandEye'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520q-83 0-154-40T374-672q-4-7-5.5-13.5T367-700q0-8 1.5-14.5T374-728q40-72 111.5-112T640-880q83 0 154 40t112 112q4 7 5.5 13.5T913-700q0 8-1.5 14.5T906-672q-40 72-111.5 112T640-520Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-700q0-25 17.5-42.5T640-760q25 0 42.5 17.5T700-700q0 25-17.5 42.5T640-640ZM313-40q-24 0-46-9t-39-26L52-252q-11-11-11.5-27.5T51-308l6-6q14-14 34-19t40 0l69 20v-327q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v280h40v-120q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480v120h40v-80q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440v80h40q0-17 11.5-28.5T600-400q17 0 28.5 11.5T640-360v160q0 66-47 113T480-40H313Z"/>
    </Icon>
  );
});

IconMaterialMultimodalHandEyeFilled.displayName = 'AmauiIconMaterialMultimodalHandEyeFilled';

export default IconMaterialMultimodalHandEyeFilled;
