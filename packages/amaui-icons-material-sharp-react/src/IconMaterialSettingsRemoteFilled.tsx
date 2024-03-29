import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteFilled'

      short_name='SettingsRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23V9h8v14Zm4-8.75q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm-3.55-6.8-1.4-1.4Q8 5.1 9.262 4.55 10.525 4 12 4t2.738.55Q16 5.1 16.95 6.05l-1.4 1.4q-.675-.675-1.587-1.063Q13.05 6 12 6t-1.962.387q-.913.388-1.588 1.063Zm-2.8-2.8L4.2 3.2Q5.7 1.725 7.7.862 9.7 0 12 0t4.288.875q1.987.875 3.462 2.375l-1.4 1.4q-1.2-1.25-2.837-1.95Q13.875 2 12 2t-3.512.7Q6.85 3.4 5.65 4.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteFilled.displayName = 'AmauiIconMaterialSettingsRemoteFilled';

export default IconMaterialSettingsRemoteFilled;
