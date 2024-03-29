import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownFilled'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 14q-.825 0-1.412-.588Q0 12.825 0 12V6.225q0-.4.15-.763.15-.362.425-.637L4.65.75Q4.9.5 5.275.462q.375-.037.675.163.3.2.45.537.15.338.075.688L5.8 5h4.25q1.2 0 1.725.925.525.925.125 1.875l-2.125 4.975q-.25.575-.737.9Q8.55 14 7.95 14Zm5.95-2L10 7.15V7H3.35l.6-2.7L2 6.2V12Zm9.9 11.225q-.25-.2-.312-.5-.063-.3-.013-.575L18.2 19H14q-1.2 0-1.762-.913-.563-.912-.138-1.887l2.125-4.975q.25-.575.738-.9Q15.45 10 16.05 10H22q.825 0 1.413.587Q24 11.175 24 12v5.775q0 .4-.15.763-.15.362-.425.637L19.35 23.25q-.325.325-.75.288-.425-.038-.75-.313ZM16.05 12 14 16.85V17h6.65l-.6 2.7L22 17.8V12ZM2 12V6.2l1.95-1.9-.6 2.7H10v.15L7.95 12H2Zm20 0v5.8l-1.95 1.9.6-2.7H14v-.15L16.05 12H22Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownFilled.displayName = 'AmauiIconMaterialThumbsUpDownFilled';

export default IconMaterialThumbsUpDownFilled;
