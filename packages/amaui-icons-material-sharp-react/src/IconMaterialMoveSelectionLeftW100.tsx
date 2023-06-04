import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeftW100'

      short_name='MoveSelectionLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M136 760V392h368v368H136Zm28-28h312V420H164v312Zm472-312v-28h28v28h-28Zm0 340v-28h28v28h-28Zm160-340v-28h28v28h-28Zm0 170v-28h28v28h-28Zm0 170v-28h28v28h-28ZM320 576Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftW100.displayName = 'AmauiIconMaterialMoveSelectionLeftW100';

export default IconMaterialMoveSelectionLeftW100;
