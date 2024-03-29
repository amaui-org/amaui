import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLink'

      short_name='MediaLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 19.5v-5l4 2.5ZM13 10q-1.25 0-2.125-.875T10 7q0-1.25.875-2.125T13 4h1.25v1.5H13q-.625 0-1.062.438Q11.5 6.375 11.5 7t.438 1.062Q12.375 8.5 13 8.5h1.25V10Zm2.75 0V8.5H17q.625 0 1.062-.438Q18.5 7.625 18.5 7t-.438-1.062Q17.625 5.5 17 5.5h-1.25V4H17q1.25 0 2.125.875T20 7q0 1.25-.875 2.125T17 10ZM13 7.75v-1.5h4v1.5ZM16.1 14v-2H21V3H9v9H7V1h16v13ZM1 23V11h16v12Zm2-2h12v-8H3ZM15 7.5ZM9 17Z"/>
    </Icon>
  );
});

IconMaterialMediaLink.displayName = 'AmauiIconMaterialMediaLink';

export default IconMaterialMediaLink;
