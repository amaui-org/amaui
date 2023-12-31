import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditorChoiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditorChoiceW100Filled'

      short_name='EditorChoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92v-263L173-580l153-248h308l153 248-139 225v263l-168-59-168 59Zm29-708L205-580l136 220h278l136-220-136-220H341Zm97 346L333-558l20-20 85 85 169-170 20 19-189 190Z"/>
    </Icon>
  );
});

IconMaterialEditorChoiceW100Filled.displayName = 'AmauiIconMaterialEditorChoiceW100Filled';

export default IconMaterialEditorChoiceW100Filled;
