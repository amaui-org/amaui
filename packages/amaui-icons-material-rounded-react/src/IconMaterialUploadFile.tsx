import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFile'

      short_name='UploadFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.825V18q0 .425.288.712.287.288.712.288t.713-.288Q13 18.425 13 18v-3.175l.9.9q.15.15.338.225.187.075.375.062.187-.012.362-.087t.325-.225q.275-.3.288-.7.012-.4-.288-.7l-2.6-2.6q-.15-.15-.325-.213-.175-.062-.375-.062t-.375.062q-.175.063-.325.213l-2.6 2.6q-.3.3-.287.7.012.4.312.7.3.275.7.288.4.012.7-.288ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z"/>
    </Icon>
  );
});

IconMaterialUploadFile.displayName = 'AmauiIconMaterialUploadFile';

export default IconMaterialUploadFile;
