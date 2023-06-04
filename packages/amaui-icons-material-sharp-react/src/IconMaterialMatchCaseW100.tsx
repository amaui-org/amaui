import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchCaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCaseW100'

      short_name='MatchCase'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m174 776 146-396h33l149 396h-35l-42-117H248l-41 117h-33Zm85-145h156l-77-216h-2l-77 216Zm409 155q-42 0-66-22.5T578 703q0-42 29-68t77-26q20 0 40 4.5t34 12.5v-24q0-42-19.5-63T680 518q-20 0-37.5 6.5T606 545l-19-19q22-18 44-26t49-8q54 0 80 28.5t26 85.5v171h-28v-42h-4q-14 26-35.5 38.5T668 786Zm-2-26q40 0 66-30.5t26-77.5q-13-8-32-12.5t-38-4.5q-38 0-59.5 18T607 703q0 26 16 41.5t43 15.5Z"/>
    </Icon>
  );
});

IconMaterialMatchCaseW100.displayName = 'AmauiIconMaterialMatchCaseW100';

export default IconMaterialMatchCaseW100;
