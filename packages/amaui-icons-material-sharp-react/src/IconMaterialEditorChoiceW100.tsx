import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditorChoiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditorChoiceW100'

      short_name='EditorChoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92v-263L173-580l153-248h308l153 248-139 225v263l-168-59-168 59Zm28-43 140-47 140 47v-197H340v197Zm1-665L205-580l136 220h278l136-220-136-220H341Zm97 346L333-558l20-20 85 85 169-170 20 19-189 190Zm-98 122h280-280Z"/>
    </Icon>
  );
});

IconMaterialEditorChoiceW100.displayName = 'AmauiIconMaterialEditorChoiceW100';

export default IconMaterialEditorChoiceW100;
