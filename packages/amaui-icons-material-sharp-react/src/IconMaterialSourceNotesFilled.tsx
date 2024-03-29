import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesFilled'

      short_name='SourceNotes'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 456h400v-80H280v80Zm440 560q-73 0-127.5-45.5T524 856h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622 716h58v60H520V616h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016Zm-600-80V216h720v303q-29-11-59-17t-61-6q-42 0-81 10.5T565 536H280v80h190q-14 18-26 38t-21 42H280v80h122q-2 10-2 19.5V816q0 31 6 61t17 59H120Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesFilled.displayName = 'AmauiIconMaterialSourceNotesFilled';

export default IconMaterialSourceNotesFilled;
