import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlareSharp'
      short_name='Flare'

      {...props}
    >
      <path d="M1 13V11H7V13ZM7.75 9.15 5.65 7.05 7.05 5.65 9.15 7.75ZM11 7V1H13V7ZM16.25 9.15 14.85 7.75 16.95 5.65 18.35 7.05ZM17 13V11H23V13ZM12 15Q10.75 15 9.875 14.125Q9 13.25 9 12Q9 10.75 9.875 9.875Q10.75 9 12 9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM16.95 18.35 14.85 16.25 16.25 14.85 18.35 16.95ZM7.05 18.35 5.65 16.95 7.75 14.85 9.15 16.25ZM11 23V17H13V23Z"/>
    </Icon>
  );
});

IconMaterialFlareSharp.displayName = 'AmauiIconMaterialFlareSharp';

export default IconMaterialFlareSharp;
