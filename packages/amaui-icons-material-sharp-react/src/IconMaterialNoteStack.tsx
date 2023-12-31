import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStack'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-80 1-601 599 1v400L680-80H280Zm80-80h280v-160h160v-280H360v440Zm-188-37L67-788l591-105 24 133h-82l-7-40-433 77 40 226v295l-28 5Zm188 37h280l160-160v-280H360v440Z"/>
    </Icon>
  );
});

IconMaterialNoteStack.displayName = 'AmauiIconMaterialNoteStack';

export default IconMaterialNoteStack;
