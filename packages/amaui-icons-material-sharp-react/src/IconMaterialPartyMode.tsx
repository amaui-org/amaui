import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPartyMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyMode'

      short_name='PartyMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-.125-.012-.25-.013-.125-.038-.25h-2q.05.125.05.25V13q0 1.05-.725 1.775-.725.725-1.775.725H8.25q.6.9 1.588 1.45.987.55 2.162.55Zm-4.45-4h2q-.05-.125-.05-.25V13q0-1.05.725-1.775Q10.95 10.5 12 10.5h3.75q-.6-.9-1.587-1.45Q13.175 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 .125.013.25.012.125.037.25ZM2 21V5h5.15L9 3h6l1.85 2H22v16Zm2-2h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialPartyMode.displayName = 'AmauiIconMaterialPartyMode';

export default IconMaterialPartyMode;
