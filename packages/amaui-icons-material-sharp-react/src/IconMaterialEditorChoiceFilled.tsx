import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditorChoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditorChoiceFilled'

      short_name='EditorChoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm100-760L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227Z"/>
    </Icon>
  );
});

IconMaterialEditorChoiceFilled.displayName = 'AmauiIconMaterialEditorChoiceFilled';

export default IconMaterialEditorChoiceFilled;
