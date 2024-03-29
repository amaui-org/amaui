import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiFilled'

      short_name='Api'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.875 8.125-2.5-2.5 3.2-3.2q.3-.3.675-.45.375-.15.75-.15t.75.15q.375.15.675.45l3.2 3.2-2.5 2.5L12 6Zm-4.25 8.5-3.2-3.2q-.3-.3-.45-.675-.15-.375-.15-.75t.15-.75q.15-.375.45-.675l3.2-3.2 2.5 2.5L6 12l2.125 2.125Zm12.75 0-2.5-2.5L18 12l-2.125-2.125 2.5-2.5 3.2 3.2q.3.3.45.675.15.375.15.75t-.15.75q-.15.375-.45.675ZM12 22.175q-.375 0-.75-.15t-.675-.45l-3.2-3.2 2.5-2.5L12 18l2.125-2.125 2.5 2.5-3.2 3.2q-.3.3-.675.45-.375.15-.75.15ZM13.425 12q0 .575-.425 1-.425.425-1 .425T11 13q-.425-.425-.425-1T11 11q.425-.425 1-.425T13 11q.425.425.425 1Z"/>
    </Icon>
  );
});

IconMaterialApiFilled.displayName = 'AmauiIconMaterialApiFilled';

export default IconMaterialApiFilled;
