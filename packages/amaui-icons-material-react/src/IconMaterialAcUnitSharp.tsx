import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAcUnitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitSharp'
      short_name='AcUnit'

      {...props}
    >
      <path d="M11 22V17.85L7.75 21.05L6.35 19.65L11 15V13H9L4.35 17.65L2.95 16.25L6.15 13H2V11H6.15L2.95 7.75L4.35 6.35L9 11H11V9L6.35 4.35L7.75 2.95L11 6.15V2H13V6.15L16.25 2.95L17.65 4.35L13 9V11H15L19.65 6.35L21.05 7.75L17.85 11H22V13H17.85L21.05 16.25L19.65 17.65L15 13H13V15L17.65 19.65L16.25 21.05L13 17.85V22Z"/>
    </Icon>
  );
});

IconMaterialAcUnitSharp.displayName = 'AmauiIconMaterialAcUnitSharp';

export default IconMaterialAcUnitSharp;
