import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTempleHinduSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduSharp'
      short_name='TempleHindu'

      {...props}
    >
      <path d="M2 22V11H4V13H6L8.975 3.125V1H10.975V3H13V1H15V3L18 13H20V11H22V22H13V17H11V22ZM8.7 11H15.3L14.7 9H9.3ZM9.9 7H14.1L13.5 5H10.5ZM4 20H9V15H15V20H20V15H16.5L15.9 13H8.1L7.5 15H4ZM12 12.5Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduSharp.displayName = 'AmauiIconMaterialTempleHinduSharp';

export default IconMaterialTempleHinduSharp;
