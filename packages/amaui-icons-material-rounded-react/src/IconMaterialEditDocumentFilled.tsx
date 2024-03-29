import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocumentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentFilled'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V11.1l-8 7.975V22Zm8.5 0q-.2 0-.35-.15-.15-.15-.15-.35v-1.2q0-.2.088-.4.087-.2.212-.325l4.85-4.875 2.15 2.1-4.875 4.9q-.125.15-.325.225-.2.075-.4.075Zm7.525-5.9L19.9 13.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.712 0 .413-.275.688ZM14 9h4l-5-5v4q0 .425.288.712Q13.575 9 14 9Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentFilled.displayName = 'AmauiIconMaterialEditDocumentFilled';

export default IconMaterialEditDocumentFilled;
