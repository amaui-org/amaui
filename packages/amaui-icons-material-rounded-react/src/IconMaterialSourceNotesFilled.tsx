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
      <path d="M720 1016q-58 0-105-29.5T543 909q-6-11-1.5-23t15.5-17q11-5 22.5-1.5T597 882q17 33 49.5 53.5T720 956q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622 716h28q13 0 21.5 8.5T680 746q0 13-8.5 21.5T650 776h-90q-17 0-28.5-11.5T520 736v-90q0-13 8.5-21.5T550 616q13 0 21.5 8.5T580 646v27q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016ZM320 456h320q17 0 28.5-11.5T680 416q0-17-11.5-28.5T640 376H320q-17 0-28.5 11.5T280 416q0 17 11.5 28.5T320 456ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v223q-29-11-59-17t-61-6q-42 0-81 10.5T565 536H320q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616h150q-14 18-26 38t-21 42H320q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776h82q-2 10-2 19.5V816q0 31 6 61t17 59H200Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesFilled.displayName = 'AmauiIconMaterialSourceNotesFilled';

export default IconMaterialSourceNotesFilled;
