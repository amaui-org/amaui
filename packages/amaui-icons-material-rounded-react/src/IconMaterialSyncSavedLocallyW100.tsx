import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncSavedLocallyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyW100'

      short_name='SyncSavedLocally'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 12.75 9.05 10.875q-.05-.05-.112-.075-.063-.025-.126-.025-.062 0-.137.025-.075.025-.125.075-.125.125-.125.25t.125.25L10.4 13.2q.225.225.525.225.3 0 .525-.225l4.125-3.95q0-.125-.025-.262-.025-.138-.125-.238-.125-.125-.25-.125t-.25.125ZM2 19v-.7h19.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.8-1.7q-.65 0-1.075-.425Q3.3 16.45 3.3 15.8V6.4q0-.65.425-1.075Q4.15 4.9 4.8 4.9h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V6.4q0-.3-.25-.55-.25-.25-.55-.25H4.8q-.3 0-.55.25Q4 6.1 4 6.4v9.4q0 .3.25.55.25.25.55.25Zm-.8 0V5.6 16.6Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100.displayName = 'AmauiIconMaterialSyncSavedLocallyW100';

export default IconMaterialSyncSavedLocallyW100;
