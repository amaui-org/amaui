import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocument = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocument'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V12h-2V9h-4q-.425 0-.712-.288Q13 8.425 13 8V4H6v16h6v2Zm0-2V4v16Zm12.3-5.475 1.075 1.075-3.875 3.85v1.05h1.05l3.875-3.85 1.05 1.05-4 4q-.15.15-.338.225-.187.075-.387.075H14.5q-.2 0-.35-.15-.15-.15-.15-.35v-2.25q0-.2.075-.387.075-.188.225-.338Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275.425 0 .7.275l1.775 1.775q.275.275.275.7 0 .425-.275.7Z"/>
    </Icon>
  );
});

IconMaterialEditDocument.displayName = 'AmauiIconMaterialEditDocument';

export default IconMaterialEditDocument;
