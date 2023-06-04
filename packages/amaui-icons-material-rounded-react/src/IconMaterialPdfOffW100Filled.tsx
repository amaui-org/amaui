import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPdfOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOffW100Filled'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M284 572v-72h56q7 0 11.5 4.5T356 516v40q0 7-4.5 11.5T340 572h-56Zm-14 108q6 0 10-4t4-10v-66h56q18 0 31-13t13-31v-40q0-18-13-31t-31-13h-54q-13 0-21.5 8.5T256 502v164q0 6 4 10t10 4Zm192 0h54q14 0 24.5-7.5T557 653l-25-25v24h-72v-96l-28-28v122q0 13 8.5 21.5T462 680ZM232 884q-25 0-42.5-17.5T172 824V328q0-12 2.5-24.5T178 274l604 604q-17 1-29.5 3.5T728 884H232Zm530 14L158 294q-4-4-4.5-9.5T158 274q5-5 10-5t10 5l604 604q4 4 4.5 9.5T782 898q-5 5-10 5t-10-5Zm26-127L644 627v-31h72q6 0 10-4t4-10q0-6-4-10t-10-4h-72v-68h72q6 0 10-4t4-10q0-6-4-10t-10-4h-70q-13 0-21.5 8.5T616 502v97l-56-56v-27q0-18-13-31t-31-13h-27L285 268h443q25 0 42.5 17.5T788 328v443Z"/>
    </Icon>
  );
});

IconMaterialPdfOffW100Filled.displayName = 'AmauiIconMaterialPdfOffW100Filled';

export default IconMaterialPdfOffW100Filled;
