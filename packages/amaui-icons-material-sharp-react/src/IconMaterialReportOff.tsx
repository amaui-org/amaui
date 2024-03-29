import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOff'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 16.95-1.45-1.4.65-.65V9.1L14.9 5H9.1l-.65.65-1.4-1.45L8.25 3h7.5L21 8.25v7.45ZM13 10.2V7h-2v1.2Zm7.5 13.1-3.55-3.55-1.2 1.25h-7.5L3 15.7V8.25l1.2-1.2L.7 3.5l1.4-1.4 19.8 19.8Zm-7.1-12.7ZM9.1 19h5.8l.65-.65-9.9-9.9L5 9.1v5.8Zm2.9-2q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16t-.287.712Q12.425 17 12 17Zm-1.4-3.6Z"/>
    </Icon>
  );
});

IconMaterialReportOff.displayName = 'AmauiIconMaterialReportOff';

export default IconMaterialReportOff;
