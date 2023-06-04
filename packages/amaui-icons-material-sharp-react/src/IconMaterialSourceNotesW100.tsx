import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesW100'

      short_name='SourceNotes'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856V296v560Zm106-414h348v-28H306v28Zm0 148h211q7.761-8.123 16.881-15.062Q543 568 553 562H306v28Zm0 148h120.032q1.968-8 4.468-14.5T435 710H306v28ZM172 884V268h616v252q-6.763-1.684-13.881-2.842Q767 516 760 515V296H200v560h219q1 7 2.158 14.119Q422.316 877.237 424 884H172Zm548 116q-61 0-109-36.5T545 872h30q17 45 55.612 72.5Q669.223 972 720 972q64.629 0 110.314-45.686Q876 880.629 876 816q0-64.629-45.686-110.314Q784.629 660 720 660q-39 0-75 20t-62 52h81v28H536V632h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904 739.64 904 816q0 76.36-53.82 130.18Q796.36 1000 720 1000Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesW100.displayName = 'AmauiIconMaterialSourceNotesW100';

export default IconMaterialSourceNotesW100;
