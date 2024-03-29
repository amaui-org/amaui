import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneOutlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineFilled'

      short_name='DoneOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.525 18 10.6-10.6L18.7 6l-9.2 9.175-4.225-4.25L3.85 12.35Zm0 2q-.375 0-.75-.15T8.1 19.4l-5.65-5.65q-.3-.3-.437-.663-.138-.362-.138-.737t.138-.75q.137-.375.437-.675l1.4-1.4q.3-.3.663-.45.362-.15.762-.15t.763.15q.362.15.662.45l2.825 2.825 7.75-7.775q.275-.3.65-.438Q18.3 4 18.675 4t.75.137q.375.138.675.413l1.425 1.4q.3.3.45.662.15.363.15.763t-.137.762q-.138.363-.438.663l-10.6 10.6q-.3.3-.675.45-.375.15-.75.15Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineFilled.displayName = 'AmauiIconMaterialDoneOutlineFilled';

export default IconMaterialDoneOutlineFilled;
