import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPdfOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOffW100'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M284 572h56q7 0 11.5-4.5T356 556v-40q0-7-4.5-11.5T340 500h-56v72Zm-28 94V502q0-13 8.5-21.5T286 472h54q18 0 31 13t13 31v40q0 18-13 31t-31 13h-56v66q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm206 14q-13 0-21.5-8.5T432 650V528l28 28v96h72v-24l25 25q-6 12-16.5 19.5T516 680h-54Zm98-137-28-28q0-6-4.5-10.5T517 500l-28-28h27q18 0 31 13t13 31v27Zm84 84-28-28v-97q0-13 8.5-21.5T646 472h70q6 0 10 4t4 10q0 6-4 10t-10 4h-72v68h72q6 0 10 4t4 10q0 6-4 10t-10 4h-72v31Zm144 144-28-28V328q0-14-9-23t-23-9H313l-28-28h443q25 0 42.5 17.5T788 328v443ZM232 884q-25 0-42.5-17.5T172 824V328q0-12 4-23t13-19l11 10v528q0 14 9 23t23 9h528l10 11q-8 9-19 13t-23 4H232Zm530 14L158 294q-4-4-4.5-9.5T158 274q5-5 10-5t10 5l604 604q4 4 4.5 9.5T782 898q-5 5-10 5t-10-5ZM460 596Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialPdfOffW100.displayName = 'AmauiIconMaterialPdfOffW100';

export default IconMaterialPdfOffW100;
